import { createHash } from "node:crypto";

type Param = {
  data: string | Uint8Array | Buffer;
  suffix: string;
  width?: number;
  height?: number;
};

export const keyGen = async (params: Param): Promise<string> => {
  const { data, suffix, width, height } = params;

  let key: string;

  if (width && height) {
    key = `${await createHash("sha256")
      .update(data)
      .digest("hex")}_${width}x${height}.${suffix}`;
  } else {
    key = `${await createHash("sha256").update(data).digest("hex")}.${suffix}`;
  }

  return key;
};
