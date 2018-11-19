var sequenceOne = new Array();
var sequenceTwo = new Array();
var resSequence = new Array()
var nameOne=prompt("请输入卷积序列一,如以下格式.","1,1,1,1,1,1")
var j = 0;
    for (var i = 0; i < nameOne.length; i++) {
      if(nameOne[i]!=','&&nameOne[i]!='，')
        {
          sequenceOne[j] = nameOne[i]-1+1;
          j++;
        }
  }

const Shape = G2.Shape;
Shape.registerShape('interval', 'triangle', {
  getPoints(cfg) {
    const x = cfg.x;
    const y = cfg.y;
    const y0 = cfg.y0;
    const width = 0.005;
    return [
      { x: x - width , y: y0 },
      { x: x -width , y: y },

      { x: x+width, y: y },
      { x: x +width , y: y0 }
    ]
  },
  draw(cfg, group) { // 自定义最终绘制
    const points = this.parsePoints(cfg.points); // 将0-1空间的坐标转换为画布坐标
    const polygon = group.addShape('polygon', {
      attrs: {
        points: [
          [ points[0].x, points[0].y ],
          [ points[1].x, points[1].y ],
          [ points[2].x, points[2].y ],
          [ points[3].x, points[3].y ]

        ],
        fill: cfg.color
      }
    });
    return polygon; // !必须返回 shape
  }
});


JSON.stringify( sequenceOne );
const sequenceOneJson = [];
for (var i = 0; i < sequenceOne.length; i++) {
   a = sequenceOne[i];
    sequenceOneJson[i]  = {x:i,SequenceOne:a };
}

const sequenceOneChart = new G2.Chart({
  container: 'c1',
  forceFit: true,
  height: 400,
  padding: [ 20, 80, 95, 80 ]
});
document.write("序列一为:"+'{'+sequenceOne+'}'+'\n');

sequenceOneChart.source(sequenceOneJson);
sequenceOneChart.interval().position('x*SequenceOne').color('green').shape('triangle');
sequenceOneChart.render();

var nameTwo=prompt("请输入卷积序列二,如以下格式.","1,1,1,1,1,1")
  j = 0;
    for (var i = 0; i < nameTwo.length; i++) {
      if(nameTwo[i]!=",")
        {
         sequenceTwo[j] = nameTwo[i]-1+1;
          j++;
        }


  }


JSON.stringify( sequenceTwo );
const sequenceTwoJson = [];

for (var i = 0; i < sequenceTwo.length; i++) {
   a = sequenceTwo[i];
    sequenceTwoJson[i]  = {x:i,SequenceTwo:a };
}


const sequenceTwoChart = new G2.Chart({
  container: 'c1',
  forceFit: true,
  height: 400,
  padding: [ 20, 80, 95, 80 ]
});
document.write("序列二为:"+'{'+sequenceTwo+'}'+'\n');
sequenceTwoChart .source(sequenceTwoJson);
sequenceTwoChart .interval().position('x*SequenceTwo').color('blue').shape('triangle');
sequenceTwoChart .render();


resSequence =  convolution(sequenceOne,sequenceTwo);
console.log(resSequence);

JSON.stringify( resSequence );
const resSequenceJson = [];

for (var i = 0; i < resSequence.length; i++) {
   a = resSequence[i];
    resSequenceJson[i]  = {x:i,Result:a };
}


const resSequenceChart = new G2.Chart({
  container: 'c1',
  forceFit: true,
  height: 400,
  padding: [ 20, 80, 95, 80 ]
});
confirm("卷积结果为:"+'{'+resSequence+'}'+'\n'+"点击确定查看图像");
resSequenceChart .source(resSequenceJson);
resSequenceChart .interval().position('x*Result').color('red').shape('triangle');
resSequenceChart .render();
document.write("卷积结果为:"+'{'+resSequence+'}'+'\n');


