import { NextApiRequest, NextApiResponse } from 'next';
import S3 from 'aws-sdk/clients/s3';

const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const bucketName = process.env.AWS_BUCKET_NAME || '';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  if (method !== 'POST') {
    res.status(400).json({ message: 'POST method only' });
    return;
  }

  const { filename, filetype, base64, path } = body;
  if (!filename || !filetype || !base64) {
    res.status(400).json({ message: 'filename, filetype, and base64 are required' });
    return;
  }

  const buffer = Buffer.from(base64, 'base64');
  const params: S3.Types.PutObjectRequest = {
    Bucket: bucketName,
    Key: filename,
    Body: buffer,
    ContentType: filetype,
  };

  try {
    await s3.upload(params).promise();
    res.status(200).json({ message: 'Upload successful', path: `https://${bucketName}.s3.amazonaws.com/${path}/${filename}` });
  } catch (error) {
    res.status(500).json({ message: 'Upload failed' });
  }
};
