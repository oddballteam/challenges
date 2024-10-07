// To parse this data:
//
//   import { Convert, CharactersResponse } from "./file";
//
//   const welcome = Convert.toCharactersResponse(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface CharactersResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: Data;
}

export interface Data {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Result[];
}

export interface Result {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Comics;
  stories: Stories;
  events: Comics;
  urls: URL[];
}

export interface Comics {
  available: number;
  collectionURI: string;
  items: ComicsItem[];
  returned: number;
}

export interface ComicsItem {
  resourceURI: string;
  name: string;
}

export interface Stories {
  available: number;
  collectionURI: string;
  items: StoriesItem[];
  returned: number;
}

export interface StoriesItem {
  resourceURI: string;
  name: string;
  type: ItemType;
}

export enum ItemType {
  Cover = "cover",
  Empty = "",
  InteriorStory = "interiorStory",
}

export interface Thumbnail {
  path: string;
  extension: Extension;
}

export enum Extension {
  GIF = "gif",
  Jpg = "jpg",
}

export interface URL {
  type: URLType;
  url: string;
}

export enum URLType {
  Comiclink = "comiclink",
  Detail = "detail",
  Wiki = "wiki",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toCharacterResponse(json: string): CharactersResponse {
    return cast(JSON.parse(json), r("CharactersResponse"));
  }

  public static welcomeToJson(value: CharactersResponse): string {
    return JSON.stringify(uncast(value, r("CharactersResponse")), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
  const prettyTyp = prettyTypeName(typ);
  const parentText = parent ? ` on ${parent}` : '';
  const keyText = key ? ` for key "${key}"` : '';
  throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
  if (Array.isArray(typ)) {
    if (typ.length === 2 && typ[0] === undefined) {
      return `an optional ${prettyTypeName(typ[1])}`;
    } else {
      return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
    }
  } else if (typeof typ === "object" && typ.literal !== undefined) {
    return typ.literal;
  } else {
    return typeof typ;
  }
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key, parent);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) { }
    }
    return invalidValue(typs, val, key, parent);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
    return val.map(el => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue(l("Date"), val, key, parent);
    }
    return d;
  }

  function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
    if (val === null || typeof val !== "object" || Array.isArray(val)) {
      return invalidValue(l(ref || "object"), val, key, parent);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach(key => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, key, ref);
    });
    Object.getOwnPropertyNames(val).forEach(key => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key, ref);
      }
    });
    return result;
  }

  if (typ === "any") return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val, key, parent);
  }
  if (typ === false) return invalidValue(typ, val, key, parent);
  let ref: any = undefined;
  while (typeof typ === "object" && typ.ref !== undefined) {
    ref = typ.ref;
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === "object") {
    return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val)
        : typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val)
          : invalidValue(typ, val, key, parent);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== "number") return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
  return { literal: typ };
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  "CharactersResponse": o([
    { json: "code", js: "code", typ: 0 },
    { json: "status", js: "status", typ: "" },
    { json: "copyright", js: "copyright", typ: "" },
    { json: "attributionText", js: "attributionText", typ: "" },
    { json: "attributionHTML", js: "attributionHTML", typ: "" },
    { json: "etag", js: "etag", typ: "" },
    { json: "data", js: "data", typ: r("Data") },
  ], false),
  "Data": o([
    { json: "offset", js: "offset", typ: 0 },
    { json: "limit", js: "limit", typ: 0 },
    { json: "total", js: "total", typ: 0 },
    { json: "count", js: "count", typ: 0 },
    { json: "results", js: "results", typ: a(r("Result")) },
  ], false),
  "Result": o([
    { json: "id", js: "id", typ: 0 },
    { json: "name", js: "name", typ: "" },
    { json: "description", js: "description", typ: "" },
    { json: "modified", js: "modified", typ: "" },
    { json: "thumbnail", js: "thumbnail", typ: r("Thumbnail") },
    { json: "resourceURI", js: "resourceURI", typ: "" },
    { json: "comics", js: "comics", typ: r("Comics") },
    { json: "series", js: "series", typ: r("Comics") },
    { json: "stories", js: "stories", typ: r("Stories") },
    { json: "events", js: "events", typ: r("Comics") },
    { json: "urls", js: "urls", typ: a(r("URL")) },
  ], false),
  "Comics": o([
    { json: "available", js: "available", typ: 0 },
    { json: "collectionURI", js: "collectionURI", typ: "" },
    { json: "items", js: "items", typ: a(r("ComicsItem")) },
    { json: "returned", js: "returned", typ: 0 },
  ], false),
  "ComicsItem": o([
    { json: "resourceURI", js: "resourceURI", typ: "" },
    { json: "name", js: "name", typ: "" },
  ], false),
  "Stories": o([
    { json: "available", js: "available", typ: 0 },
    { json: "collectionURI", js: "collectionURI", typ: "" },
    { json: "items", js: "items", typ: a(r("StoriesItem")) },
    { json: "returned", js: "returned", typ: 0 },
  ], false),
  "StoriesItem": o([
    { json: "resourceURI", js: "resourceURI", typ: "" },
    { json: "name", js: "name", typ: "" },
    { json: "type", js: "type", typ: r("ItemType") },
  ], false),
  "Thumbnail": o([
    { json: "path", js: "path", typ: "" },
    { json: "extension", js: "extension", typ: r("Extension") },
  ], false),
  "URL": o([
    { json: "type", js: "type", typ: r("URLType") },
    { json: "url", js: "url", typ: "" },
  ], false),
  "ItemType": [
    "cover",
    "",
    "interiorStory",
  ],
  "Extension": [
    "gif",
    "jpg",
  ],
  "URLType": [
    "comiclink",
    "detail",
    "wiki",
  ],
};

