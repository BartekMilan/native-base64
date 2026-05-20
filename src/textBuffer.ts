import {utf8Decode, utf8Encode} from './utf8';

export function textToArrayBuffer(text: string): ArrayBuffer {
  const bytes = utf8Encode(text);
  const buffer = new ArrayBuffer(bytes.byteLength);
  new Uint8Array(buffer).set(bytes);
  return buffer;
}

export function arrayBufferToText(buffer: ArrayBuffer): string {
  return utf8Decode(new Uint8Array(buffer));
}
