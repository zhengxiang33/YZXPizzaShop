/**
 * Created by Administrator on 2014/11/24.
 */
var http = require("http");
var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

var hb = require("express-handlebars");
app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.get("/", function(req, res){
  res.render("home", { title: "Hello from WebStorm", message: "Hi there!"});
});

app.get("/api/topping", function(req, res) {
  res.status(200);
  res.set("Content-Type", "application/json");
  res.send(["pepperoni", "sausage", "spinach", "mushrooms", "ham","pineapple"]);
});

var server = http.createServer(app);

server.listen(3000);


