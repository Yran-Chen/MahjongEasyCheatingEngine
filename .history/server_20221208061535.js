var express = require('express');
var fs=require("fs");
var app = express();
app.use(express.static("./"));

app.listen(5000, function() {   
    console.log("server start");
});
