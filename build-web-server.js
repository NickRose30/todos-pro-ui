const express = require('express');
const cors = require('cors');
const {
  createProxyMiddleware,
} = require('http-proxy-middleware');
const path = require('path');

const port = Number(process.env.PORT || 3000);
const serverHost = 'http://localhost:8088';

const app = express();

app.use(cors());
app.use(
  '/v1',
  createProxyMiddleware({
    target: serverHost,
    secure: false,
  })
);

app.use(express.static('./packages/web/dist'));
app.get('*', (req, res) => {
  res.sendFile(
    path.resolve('packages', 'web', 'dist', 'index.html')
  );
});

app.listen(port, _ => {
  console.log(
    `🚀 Listening on http://localhost:${port} :: proxy -> ${serverHost}`
  );
});
