import { Md5 } from 'ts-md5';
import utf8 from 'utf8';

// interface for query params
interface QueryParams {
  apikey: string;
  limit: string;
  ts: string;
  hash: string;
}

export function setQueryParams(limit: number): QueryParams {
  let ts = new Date().getTime();
  let hash = Md5.hashStr(utf8.encode(ts + "your private key" + "your public key"));

  return {
    apikey: "your public key",
    ts: ts.toString(),
    hash: hash,
    limit: limit.toString()
  }
}
