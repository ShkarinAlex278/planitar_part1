const express = require("express");
const app = express();
const articles = [];

app.get("/articles/", function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  res.send(articles);
});

app.get("/articles/:id", function (req, res, next) {
  const name = req.params.id;
  if (articles.indexOf(name) < 0) {
    res.sendStatus(404);
  } else {
    res.setHeader("Content-Type", "text/html");
    res.sendStatus(200);
  }
});

app.put("/articles/:id", function (req, res, next) {
  const name = req.params.id;
  if (articles.indexOf(name) < 0) {
    articles.push(name);
    res.sendStatus(201);
  } else {
    res.sendStatus(200);
  }
});

app.listen(9090);
