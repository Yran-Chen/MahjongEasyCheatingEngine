var express = require('express');
var fs=require("fs");
var app = express();
app.use(express.static("./"));

app.listen(args.port || 5000) 