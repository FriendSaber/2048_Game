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
    grid[i] = [2,2,0,0];
}



var FlashUI = function () {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            drawCell(i, j);
            //var graphics=new PIXI.Graphics();
            //graphics.beginFill(0x3290FA, 1);
            //graphics.drawRoundedRect(app.renderer.width/8+160*j, app.renderer.height/7*3+160*i,156, 156);
            //app.stage.addChild(graphics);
        }
    }
};
FlashUI();

function generateRandom(){
    return Math.floor(Math.random()*4)
}


function drawCell(rowIndex,columnIndex) {

    var color=0x99D9EA;
    if(grid[rowIndex][columnIndex]===2){
        color=0x99D9bc;
    }
    var graphics = new PIXI.Graphics();
    graphics.beginFill(getColorByNumber(grid[rowIndex][columnIndex]), 1);
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

var rowIndex=generateRandom();
var columnIndex=generateRandom();
grid[rowIndex][columnIndex]=2;

drawCell(rowIndex, columnIndex);

function getColorByNumber(number) {
    var colorValue = {
        0: 0x00FF00,
        2: 0xFF0000,
        4: 0x0000FF
    };

    return colorValue[number];
}

document.addEventListener('keydown',function(event){
    if(event.code== "ArrowRight"){
        console.log(event)
        moveCellToRight();
        FlashUI();
    }
});

function moveCellToRight() {
    for (var rowIndex = 0; rowIndex < 4; rowIndex++) {
        for (var columnIndex = 2; columnIndex >= 0; columnIndex--) {
            if (grid[rowIndex][columnIndex] === 0) continue;

            var theEmptyCellIndex = findTheFirstRightCell(rowIndex, columnIndex);
            if (theEmptyCellIndex !== -1) {
                grid[rowIndex][theEmptyCellIndex] = grid[rowIndex][columnIndex];
                grid[rowIndex][columnIndex] = 0;

                if (grid[rowIndex][theEmptyCellIndex] === grid[rowIndex][theEmptyCellIndex + 1]) {
                    grid[rowIndex][theEmptyCellIndex+ 1] += grid[rowIndex][theEmptyCellIndex];
                    grid[rowIndex][theEmptyCellIndex] = 0;
                }
            }

        }
    }
}


function findTheFirstRightCell(rowIndex, columnIndex) {
    for (var i = 3; i > columnIndex; i--) {
        if (grid[rowIndex][i] === 0) {
            return i;
        }
    }
    return -1;
}

