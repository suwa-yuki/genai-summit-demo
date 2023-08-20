const bucketName = process.env.GCS_BUCKET;

const express = require('express');
const {Storage} = require('@google-cloud/storage');

const app = express();

app.get('/api/get-json-file', async (req, res) => {
  // ファイル名を取得します。
  const fileName = req.query.filename;

  // Cloud Storage クライアントを作成します。
  const storage = new Storage();

  // ファイルを取得します。
  const file = await storage.bucket(bucketName).file(fileName).read();

  // レスポンスを返します。
  res.send(file);
});

app.listen(3000, () => {
  console.log('App is running on port 3000');
});