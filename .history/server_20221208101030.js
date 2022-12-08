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
    var jss = JSON.stringify(req.body);
    var cards = JSON.parse( jss );
    // console.log('Data received: ' + JSON.stringify(req.body));
    console.log(cards);
    // 选出一张最优牌
    var outLogic = new outCardLogic();
    var card = parseInt(outLogic.outAI(cards));

    var ret = "1b";
    if (20<card && card<30){
        ret = (card-20).toString() +"z";
    }
    else if (30<card && card<40){
        ret = (card-30).toString() +"m";
    }
    else if (40<cacard && card<50){
        ret = (card-40).toString() +"s";
    }
    else if (50<card && card<60){
        ret = (card-50).toString() +"p";
    }
    else if (10<card && card<20){
        ret = (card-10).toString() +"z";
    }
    console.log(card);
    console.log(ret);
    var response = {
        val:ret
      }
     res.json(response);

  });
 
var server = app.listen(3000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("http://127.0.0.1:3000/public/index.html")
 
})