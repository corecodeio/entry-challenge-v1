"use strict";
exports.__esModule = true;
var url = 'https://http://95.217.235.69/';
var data_json_1 = require("./data.json");
console.log(data_json_1["default"].contactInfo.fullName);
console.log(data_json_1["default"].credentials.password);
console.log(url);
var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var app = express();
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post(url, function (req, res) {
    res.send('Got a POST request');
});
app.get(url + '/' + data_json_1["default"].contactInfo.emailAddress, function (req, res) {
    res.send('Hello World!');
});
router.post(url, function (req, res) {
    res.json(data_json_1["default"]);
    console.log("User name = " + data_json_1["default"].contactInfo.fullName + ", password is " + data_json_1["default"].credentials.password);
    res.send("post method trigger");
});
router.get(url + '/' + data_json_1["default"].contactInfo.emailAddress, function (req, res) {
    console.log(req.params());
    res.send('get method trigger');
});
// add router in the Express app.
app.use("/", router);
//Resource used
//https://codeforgeek.com/handle-get-post-request-express-4/
