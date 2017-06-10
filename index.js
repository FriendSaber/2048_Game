/**
 * Created by 荼蘼 on 2017-06-10.
 */
var app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor: 0x1099bb});
document.body.appendChild(app.view);//文档对象模型

var basicText = new PIXI.Text('2048',{
    fontSize:150
});

basicText.anchor.set(0.5);
basicText.x = app.renderer.width/2;//230;
basicText.y = app.renderer.height/4;//90;

app.stage.addChild(basicText);

var grid =[];
for(var i=0; i<4;i++){
    grid[i] = [0,0,0,0];
}

for(var i=0;i<4;i++){
    for(var j=0;j<4;j++){
        var graphics=new PIXI.Graphics();
        graphics.beginFill(0x3A97FF, 1);
        graphics.drawRoundedRect(app.renderer.width/8+160*j, app.renderer.height/7*3+160*i,156, 156);
        app.stage.addChild(graphics);
    }
}

function generateRandom(){
    return Math.floor(Math.random()*4)
}
var x=generateRandom();
var y=generateRandom();

for(var i=0;i<4;i++){
    for(var j=0;j<4;j++){
        var graphics=new PIXI.Graphics();
        graphics.beginFill(0xEFF6FE, 1);
        graphics.drawRoundedRect(app.renderer.width/8+160*y, app.renderer.height/7*3+160*x,154, 154);
        app.stage.addChild(graphics);
    }
}

var number = new PIXI.Text('2',{
    fontSize:150
});

number.anchor.set(0.5);
number.x = 156/2+app.renderer.width/8+160*y;//230;
number.y = 156/2+app.renderer.height/7*3+160*x;//90;

app.stage.addChild(number);

