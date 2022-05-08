const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("server request");

  res.setHeader("Content-Type", "text/html");

  const createPath = (page) => path.resolve(`${page}.html`);

  let basePath = "";

  switch (req.url) {
    case "/":
    case "/home":
    case "/index":
      basePath = createPath("index");
      res.statusCode = 200;
      break;
    case "/yep":
      res.statusCode = 301;
      res.setHeader("Location", "/main");
      res.end();
      break;
    case "/main":
      basePath = createPath("main");
      res.statusCode = 200;
      break;
    default:
      res.statusCode = 404;
      break;
  }

  fs.readFile(basePath, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(PORT, "localhost", (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

