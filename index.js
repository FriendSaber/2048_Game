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
var rowIndex=generateRandom();
var columnIndex=generateRandom();
grid[rowIndex][columnIndex]=2;
for(var i=0;i<4;i++){
    for(var j=0;j<4;j++){
        drawCell(i,j);
        //var graphics=new PIXI.Graphics();
        //graphics.beginFill(0x3290FA, 1);
        //graphics.drawRoundedRect(app.renderer.width/8+160*j, app.renderer.height/7*3+160*i,156, 156);
        //app.stage.addChild(graphics);
    }
}

function generateRandom(){
    return Math.floor(Math.random()*4)
}


function drawCell(rowIndex,columnIndex) {

    var color=0x99D9EA;
    if(grid[rowIndex][columnIndex]===2){
        color=0x99D9bc;
    }
    var graphics = new PIXI.Graphics();
    graphics.beginFill(color, 1);
    graphics.drawRoundedRect(app.renderer.width / 8 + 160 * columnIndex, app.renderer.height / 7 * 3 + 160 * rowIndex, 154, 154);
    app.stage.addChild(graphics);


    if(grid[rowIndex][columnIndex]!= 0 ){
        var number = new PIXI.Text(grid[rowIndex][columnIndex], {
            fontSize: 150
        });

        number.anchor.set(0.5);
        number.x = 156 / 2 + app.renderer.width / 8 + 160 * columnIndex;//230;
        number.y = 156 / 2 + app.renderer.height / 7 * 3 + 160 * rowIndex;//90;

        app.stage.addChild(number);
    }

};

document.addEventListener('keydown',function(event){
    if(event.code== "ArrowUp"){
        console.log(event)
    }
});


