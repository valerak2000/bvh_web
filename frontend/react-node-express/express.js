/*eslint no-console: ["off", { allow: ["warn", "error"] }] */

const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 8080;
const portSsl = process.env.PORT_SSL || 8081;
const distFolder = 'src/static_dist';

app.use(compression());

app.get('*', (req, res, next) => {
  //If URL is not a file
  if (!path.extname(req.url) && req.url !== '/') {
    console.debug(`redirect the ${req.url} to index.html`);
    req.url = '/';
  }

  next();
});

app.use(express.static(distFolder));

//http site
http.createServer(app).listen(port, error => {
  if (error) console.log(error);
  else console.log(`Express web server started: http://localhost:${port}`);
});

/*
//https site

https
  .createServer(
    {
      key: fs.readFileSync(path.join(__dirname, 'localhost.pem')),
      cert: fs.readFileSync(path.join(__dirname, 'localhost.pem'))
    },
    app
  )
  .listen(portSsl, error => {
    if (error) console.log(error);
    else
      console.log(`Express web server started: https://localhost:${portSsl}`);
  });
*/