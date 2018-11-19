
var a = new Array();

function getMin(a,b){
  return a<b ? a:b;
}

function getMax(a,b){
  return a>b ? a:b;
}

function convolution(sequenceOne,sequenceTwo) {//卷积实现
  var i = 0;
  var j = 0;
  var res = new Array(sequenceOne.length+sequenceTwo.length-1);
  for ( i = 0; i < res.length; i++)
    res[i] = 0;
  for ( i = 0; i < res.length; i++) {
    for ( j= getMax(0,i+1-sequenceTwo.length); j <= getMin(i,sequenceOne.length-1); j++) {
      res[i] += sequenceOne[j] * sequenceTwo[i-j];
    }
  }
  return res;
}
