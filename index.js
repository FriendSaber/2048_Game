/**
 * Created by 荼蘼 on 2017-06-10.
 */
var app = new PIXI.Application(800, 600, {backgroundColor: 0x1099bb});
document.body.appendChild(app.view);//文档对象模型

var basicText = new PIXI.Text('2048',{
    fontSize:70
});

basicText.anchor.set(0.5);
basicText.x = app.renderer.width/3;//230;
basicText.y = app.renderer.height/8;//90;

app.stage.addChild(basicText);

var grid =[];
for(var i=0; i<4;i++){
    grid[i] = [0,0,0,0];
}

for(var i=0;i<4;i++){
    for(var j=0;j<4;j++){
        var graphics=new PIXI.Graphics();
        graphics.beginFill(0xFFCD72, 1);
        graphics.drawRect(app.renderer.width/15+102*j, app.renderer.height/20*5+102*i, 100, 100);
        app.stage.addChild(graphics);
    }
}
