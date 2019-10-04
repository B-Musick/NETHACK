var express = require("express");
var data = require('./scripts/file.json'); // your json file path
var app = express();


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/json", function (req, res, next) {
    res.json(data);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))