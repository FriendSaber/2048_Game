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
        graphics.beginFill(0xFFCD72, 1);
        graphics.drawRect(app.renderer.width/8+160*j, app.renderer.height/8*3+160*i,156, 156);
        app.stage.addChild(graphics);
    }
}
