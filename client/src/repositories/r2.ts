import {
  GetObjectCommand,
  type GetObjectCommandOutput,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";

const client: S3Client = new S3Client({
  region: "auto",
  endpoint: process.env.NEXT_PUBLIC_R2_PATH as string,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_R2_ACCESS_KEY as string,
    secretAccessKey: process.env.NEXT_PUBLIC_R2_SECRET_KEY as string,
  },
});

type PutR2Params = {
  key: string;
  data: string | Uint8Array | Buffer;
  contentType: string;
};

type FetchImageResponse = {
  base64: string;
};

export interface IR2Repository {
  putR2: (params: PutR2Params) => Promise<string>;
}

export const R2RepositoryImpl: IR2Repository = {
  putR2: async (params: PutR2Params): Promise<string> => {
    await client
      .send(
        new PutObjectCommand({
          Bucket: process.env.NEXT_PUBLIC_R2_BUCKET_NAME as string,
          Key: params.key,
          Body: params.data,
          ContentType: params.contentType,
          ACL: "public-read",
        }),
      )
      .catch((error) => {
        console.error(error);
        throw new Error(error);
      });

    return `${process.env.NEXT_PUBLIC_R2_SUB_DOMAIN}/${params.key}`;
  },
};
