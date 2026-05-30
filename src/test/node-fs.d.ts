declare module "node:fs" {
  export function readFileSync(path: string, encoding: BufferEncoding): string;
}

type BufferEncoding = "utf8";
