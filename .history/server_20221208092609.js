var express = require('express');
var app = express();
bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/public', express.static('public'));

const outCardLogic = require('./lib/outCardLogic');



let bestp;
// console.log(__dirname + "\\public" + "\\index.html")
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/public" + "/index.html" );
})

app.put('/clicked', (req, res) => {
    const click = {clickTime: new Date()};
    console.log('Data received: ' + JSON.stringify(req.body));
    console.log(click);
    // 选出一张最优牌
    var outLogic = new outCardLogic();
    var card = outLogic.outAI(cards);
    var response = {
        val:"7z"
      }
     res.json(response);

  });
 
var server = app.listen(3000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("http://127.0.0.1:3000/public/index.html")
 
})