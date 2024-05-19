import type { NextApiRequest, NextApiResponse } from "next";
import { R2RepositoryImpl } from "@/repositories/r2";
import { MAX_AGE } from "@/constants/cache";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  const key = req.query.key as string;

  const { Body, ContentType } = await R2RepositoryImpl.getR2(key);

  if (!Body) {
    res.status(404).send("Not Found");
    return;
  }

  if (!ContentType) {
    res.status(500).send("Internal Server Error");
    return;
  }

  const data = (await Body.transformToByteArray()).buffer;

  res.setHeader("Content-Type", ContentType);
  res.setHeader("Cache-Control", `public, max-age=${MAX_AGE}`);
  res.send(Buffer.from(data).toString("base64"));
}
