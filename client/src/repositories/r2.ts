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

export interface IR2Repository {
  getR2: (key: string) => Promise<GetObjectCommandOutput>;
  putR2: (params: PutR2Params) => Promise<void>;
}

export const R2RepositoryImpl: IR2Repository = {
  getR2: async (key: string): Promise<GetObjectCommandOutput> => {
    const res = await client.send(
      new GetObjectCommand({
        Bucket: process.env.NEXT_PUBLIC_R2_BUCKET_NAME as string,
        Key: key,
      }),
    );

    return res;
  },
  putR2: async (params: PutR2Params): Promise<void> => {
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
  },
};
