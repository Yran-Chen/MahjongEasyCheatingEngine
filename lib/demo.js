const outCardLogic = require('./outCardLogic');

// 手牌
const cards = ['31' , '32', '33', '38', '38', '41', '45'];
const cards2 = ["42","23","34","37","40","57","48","31","22","48","43","57","45"];
// 选出一张最优牌
var outLogic = new outCardLogic();
var card = outLogic.outAI(cards2);

console.log("card:%j", card);
