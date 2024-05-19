import type { NextApiRequest, NextApiResponse } from "next";
import { R2RepositoryImpl } from "@/repositories/r2";
import { detectType, keyGen } from "@/libs/r2";

type PutR2Request = {
  base64: string;
  width?: number;
  height?: number;
};

type PutR2Response = {
  url: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PutR2Response | Error>,
) {
  if (req.method !== "POST") {
    res.status(405).send(new Error("Method Not Allowed"));
    return;
  }

  const body = req.body as PutR2Request;

  const type = detectType(body.base64);
  if (!type) {
    res.status(400).send(new Error("Invalid mime type"));
    return;
  }

  const data = Uint8Array.from(atob(body.base64), (c) => c.charCodeAt(0));

  const key = await keyGen({
    data: body.base64,
    suffix: type.suffix,
    width: body.width,
    height: body.height,
  });

  const result = await R2RepositoryImpl.putR2({
    key,
    data: data,
    contentType: type.mimeType,
  });

  res.send({ url: result });
}
