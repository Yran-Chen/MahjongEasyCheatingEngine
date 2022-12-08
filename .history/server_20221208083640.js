var express = require('express');
var app = express();
bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/public', express.static('public'));

let bestp;
// console.log(__dirname + "\\public" + "\\index.html")
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/public" + "/index.html" );
})

app.put('/clicked', (req, res) => {
    const click = {clickTime: new Date()};
    console.log('Data received: ' + JSON.stringify(req.body));
    console.log(click);
    res.send("7z");
  });

  app.get('/circle', (req, res) => {
      res.send("7z"); // if neither of the above, send the (x,y) from the DB
    });

 
var server = app.listen(3000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("http://127.0.0.1:3000/public/index.html")
 
})