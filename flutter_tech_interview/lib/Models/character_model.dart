// To parse this JSON data, do
//
//     final character = characterFromJson(jsonString);

import 'dart:convert';

MarvelCharacter characterFromJson(String str) => MarvelCharacter.fromJson(json.decode(str));

String characterToJson(MarvelCharacter data) => json.encode(data.toJson());

class MarvelCharacter {
  MarvelCharacter({
    this.code,
    this.status,
    this.copyright,
    this.attributionText,
    this.attributionHtml,
    this.data,
    this.etag,
  });

  int? code;
  String? status;
  String? copyright;
  String? attributionText;
  String? attributionHtml;
  Data? data;
  String? etag;

  factory MarvelCharacter.fromJson(Map<String, dynamic> json) => MarvelCharacter(
        code: json["code"] == null ? null : json["code"],
        status: json["status"] == null ? null : json["status"],
        copyright: json["copyright"] == null ? null : json["copyright"],
        attributionText: json["attributionText"] == null ? null : json["attributionText"],
        attributionHtml: json["attributionHTML"] == null ? null : json["attributionHTML"],
        data: json["data"] == null ? null : Data.fromJson(json["data"]),
        etag: json["etag"] == null ? null : json["etag"],
      );

  Map<String, dynamic> toJson() => {
        "code": code == null ? null : code,
        "status": status == null ? null : status,
        "copyright": copyright == null ? null : copyright,
        "attributionText": attributionText == null ? null : attributionText,
        "attributionHTML": attributionHtml == null ? null : attributionHtml,
        "data": data == null ? null : data!.toJson(),
        "etag": etag == null ? null : etag,
      };
}

class Data {
  Data({
    this.offset,
    this.limit,
    this.total,
    this.count,
    this.results,
  });

  int? offset;
  int? limit;
  int? total;
  int? count;
  List<Result>? results;

  factory Data.fromJson(Map<String, dynamic> json) => Data(
        offset: json["offset"] == null ? null : json["offset"],
        limit: json["limit"] == null ? null : json["limit"],
        total: json["total"] == null ? null : json["total"],
        count: json["count"] == null ? null : json["count"],
        results: json["results"] == null ? null : List<Result>.from(json["results"].map((x) => Result.fromJson(x))),
      );

  Map<String, dynamic> toJson() => {
        "offset": offset == null ? null : offset,
        "limit": limit == null ? null : limit,
        "total": total == null ? null : total,
        "count": count == null ? null : count,
        "results": results == null ? null : List<dynamic>.from(results!.map((x) => x.toJson())),
      };
}

class Result {
  Result({
    this.id,
    this.name,
    this.description,
    this.modified,
    this.resourceUri,
    this.urls,
    this.thumbnail,
    this.comics,
    this.stories,
    this.events,
    this.series,
  });

  int? id;
  String? name;
  String? description;
  String? modified;
  String? resourceUri;
  List<Url>? urls;
  Thumbnail? thumbnail;
  Comics? comics;
  Stories? stories;
  Comics? events;
  Comics? series;

  factory Result.fromJson(Map<String, dynamic> json) => Result(
        id: json["id"] == null ? null : json["id"],
        name: json["name"] == null ? null : json["name"],
        description: json["description"] == null ? null : json["description"],
        modified: json["modified"] == null ? null : json["modified"],
        resourceUri: json["resourceURI"] == null ? null : json["resourceURI"],
        urls: json["urls"] == null ? null : List<Url>.from(json["urls"].map((x) => Url.fromJson(x))),
        thumbnail: json["thumbnail"] == null ? null : Thumbnail.fromJson(json["thumbnail"]),
        comics: json["comics"] == null ? null : Comics.fromJson(json["comics"]),
        stories: json["stories"] == null ? null : Stories.fromJson(json["stories"]),
        events: json["events"] == null ? null : Comics.fromJson(json["events"]),
        series: json["series"] == null ? null : Comics.fromJson(json["series"]),
      );

  Map<String, dynamic> toJson() => {
        "id": id == null ? null : id,
        "name": name == null ? null : name,
        "description": description == null ? null : description,
        "modified": modified == null ? null : modified,
        "resourceURI": resourceUri == null ? null : resourceUri,
        "urls": urls == null ? null : List<dynamic>.from(urls!.map((x) => x.toJson())),
        "thumbnail": thumbnail == null ? null : thumbnail!.toJson(),
        "comics": comics == null ? null : comics!.toJson(),
        "stories": stories == null ? null : stories!.toJson(),
        "events": events == null ? null : events!.toJson(),
        "series": series == null ? null : series!.toJson(),
      };
}

class Comics {
  Comics({
    this.available,
    this.returned,
    this.collectionUri,
    this.items,
  });

  int? available;
  int? returned;
  String? collectionUri;
  List<ComicsItem>? items;

  factory Comics.fromJson(Map<String, dynamic> json) => Comics(
        available: json["available"] == null ? null : json["available"],
        returned: json["returned"] == null ? null : json["returned"],
        collectionUri: json["collectionURI"] == null ? null : json["collectionURI"],
        items: json["items"] == null ? null : List<ComicsItem>.from(json["items"].map((x) => ComicsItem.fromJson(x))),
      );

  Map<String, dynamic> toJson() => {
        "available": available == null ? null : available,
        "returned": returned == null ? null : returned,
        "collectionURI": collectionUri == null ? null : collectionUri,
        "items": items == null ? null : List<dynamic>.from(items!.map((x) => x.toJson())),
      };
}

class ComicsItem {
  ComicsItem({
    this.resourceUri,
    this.name,
  });

  String? resourceUri;
  String? name;

  factory ComicsItem.fromJson(Map<String, dynamic> json) => ComicsItem(
        resourceUri: json["resourceURI"] == null ? null : json["resourceURI"],
        name: json["name"] == null ? null : json["name"],
      );

  Map<String, dynamic> toJson() => {
        "resourceURI": resourceUri == null ? null : resourceUri,
        "name": name == null ? null : name,
      };
}

class Stories {
  Stories({
    this.available,
    this.returned,
    this.collectionUri,
    this.items,
  });

  int? available;
  int? returned;
  String? collectionUri;
  List<StoriesItem>? items;

  factory Stories.fromJson(Map<String, dynamic> json) => Stories(
        available: json["available"] == null ? null : json["available"],
        returned: json["returned"] == null ? null : json["returned"],
        collectionUri: json["collectionURI"] == null ? null : json["collectionURI"],
        items: json["items"] == null ? null : List<StoriesItem>.from(json["items"].map((x) => StoriesItem.fromJson(x))),
      );

  Map<String, dynamic> toJson() => {
        "available": available == null ? null : available,
        "returned": returned == null ? null : returned,
        "collectionURI": collectionUri == null ? null : collectionUri,
        "items": items == null ? null : List<dynamic>.from(items!.map((x) => x.toJson())),
      };
}

class StoriesItem {
  StoriesItem({
    this.resourceUri,
    this.name,
    this.type,
  });

  String? resourceUri;
  String? name;
  String? type;

  factory StoriesItem.fromJson(Map<String, dynamic> json) => StoriesItem(
        resourceUri: json["resourceURI"] == null ? null : json["resourceURI"],
        name: json["name"] == null ? null : json["name"],
        type: json["type"] == null ? null : json["type"],
      );

  Map<String, dynamic> toJson() => {
        "resourceURI": resourceUri == null ? null : resourceUri,
        "name": name == null ? null : name,
        "type": type == null ? null : type,
      };
}

class Thumbnail {
  Thumbnail({
    this.path,
    this.extension,
  });

  String? path;
  String? extension;

  factory Thumbnail.fromJson(Map<String, dynamic> json) => Thumbnail(
        path: json["path"] == null ? null : json["path"],
        extension: json["extension"] == null ? null : json["extension"],
      );

  Map<String, dynamic> toJson() => {
        "path": path == null ? null : path,
        "extension": extension == null ? null : extension,
      };
}

class Url {
  Url({
    this.type,
    this.url,
  });

  String? type;
  String? url;

  factory Url.fromJson(Map<String, dynamic> json) => Url(
        type: json["type"] == null ? null : json["type"],
        url: json["url"] == null ? null : json["url"],
      );

  Map<String, dynamic> toJson() => {
        "type": type == null ? null : type,
        "url": url == null ? null : url,
      };
}
