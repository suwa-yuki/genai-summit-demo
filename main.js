const express = require('express');
const {Storage} = require('@google-cloud/storage');

const app = express();

const bucketName = process.env.GCS_BUCKET;
const fileName = process.env.GCS_FILE;

app.get('/', async (req, res) => {
  // クライアントを作成します。
  const storage = new Storage();

  // オブジェクトを取得します。
  const bucket = await storage.bucket(bucketName);
  const blob = await bucket.file(fileName);

  // オブジェクトをレスポンスに書き込みます。
  res.send(blob.data);
});

app.listen(3000, () => {
  console.log('App is running on port 3000');
});