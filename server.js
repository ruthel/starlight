const {parse} = require('url');
const next = require('next');
const express = require('express');
const _init = require("./src/pages/api/helpers/db/_init");
const bodyParser = require('body-parser');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;

const app = next({dev, hostname, port});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(cors())
  server.use(bodyParser.json({limit: '50mb'}));
  server.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

  server.all('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl).then()
  });

  server.listen(port, async (err) => {
    _init()
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
