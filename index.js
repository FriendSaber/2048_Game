/**
 * Created by 荼蘼 on 2017-06-10.
 */
/*var app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor: 0x1099bb});
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
        0: 0xFFFAFA,
        2: 0xFFFF33,
        4: 0x3290FA
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

            }
            var currentIndex = theEmptyCellIndex === -1 ? columnIndex : theEmptyCellIndex;

            if (grid[rowIndex][currentIndex] === grid[rowIndex][currentIndex + 1]) {
                grid[rowIndex][currentIndex+ 1] += grid[rowIndex][currentIndex];
                grid[rowIndex][currentIndex] = 0;
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
}*/
var app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor: 0x1099bb});
document.body.appendChild(app.view);

var maxCount = 16;
var currentCount = 0;

var score = 0;

var basicText = new PIXI.Text('2048', {
    fontSize: 48
});
basicText.anchor.set(0.5);
basicText.x = app.renderer.width / 2;
basicText.y = app.renderer.height / 4;

app.stage.addChild(basicText);

var scoreText = new PIXI.Text('Score: ' + score, {
    fontSize: 48
});
scoreText.anchor.set(0.5);
scoreText.x = app.renderer.width / 2;
scoreText.y = app.renderer.height / 10 * 9;
app.stage.addChild(scoreText);

var grid = [];
for (var i = 0; i < 4; i++) {
    grid[i] = [0, 0, 0, 0];
}

var flushUI = function () {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            drawCell(i, j);
        }
    }

    scoreText.text = 'Score: ' + score;
};
flushUI();

function generateRandomNumber() {
    return Math.floor(Math.random() * 4);
}


function drawCell(rowIndex, columnIndex) {
    var graphics = new PIXI.Graphics();
    graphics.beginFill(getColorByNumber(grid[rowIndex][columnIndex]), 1);
    graphics.drawRect(app.renderer.width / 8 + columnIndex * 77, app.renderer.height / 8 * 3 + rowIndex * 77, 75, 75);
    app.stage.addChild(graphics);

    if (grid[rowIndex][columnIndex] !== 0) {
        var number = new PIXI.Text(grid[rowIndex][columnIndex], {
            fontSize: 48
        });
        number.anchor.set(0.5);
        number.x = 75 / 2 + app.renderer.width / 8 + columnIndex * 77;
        number.y = 75 / 2 + app.renderer.height / 8 * 3 + rowIndex * 77;
        app.stage.addChild(number);
    }
};

function getColorByNumber(number) {
    var colorValue = {
        0: 0x00FF00,
        2: 0xFF0000,
        4: 0x0000FF,
        8: 0xFFFF00,
    };

    var color = colorValue[number];
    if (color === undefined) {
        color = 0xff0fff;
    }

    return color;
}

var addRandomCell = function () {
    if (currentCount === maxCount) return;

    var rowIndex = generateRandomNumber();
    var columnIndex = generateRandomNumber();

    while (grid[rowIndex][columnIndex] !== 0) {
        rowIndex = generateRandomNumber();
        columnIndex = generateRandomNumber();
    }

    grid[rowIndex][columnIndex] = 2;
    currentCount++;
};

addRandomCell();
addRandomCell();

flushUI();

var onToRightEventHandler = function () {
    var isChanged = moveCellToRight();
    if (isChanged) {
        addRandomCell();
    }
    flushUI();
    if (checkGameOver()) {
        alert('Game over.');
    }
};
var onToDownEventHandler = function () {
    rotateArray(3);
    var isChanged = moveCellToRight();
    rotateArray(1);
    if (isChanged) {
        addRandomCell();
    }
    flushUI();
    if (checkGameOver()) {
        alert('Game over.');
    }
};
var onToLeftEventHandler = function () {
    rotateArray(2);
    var isChanged = moveCellToRight();
    rotateArray(2);
    if (isChanged) {
        addRandomCell();
    }
    flushUI();
    if (checkGameOver()) {
        alert('Game over.');
    }
};
var onToUpEventHandler = function () {
    rotateArray(1);
    var isChanged = moveCellToRight();
    rotateArray(3);
    if (isChanged) {
        addRandomCell();
    }
    flushUI();
    if (checkGameOver()) {
        alert('Game over.');
    }
};
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        onToRightEventHandler();
    }

    if (event.key === 'ArrowUp') {
        onToUpEventHandler();
    }

    if (event.key === 'ArrowLeft') {
        onToLeftEventHandler();
    }

    if (event.key === 'ArrowDown') {
        onToDownEventHandler();
    }
});

var hammertime = new Hammer.Manager(document, {
    recognizers: [
        [Hammer.Swipe, {direction: Hammer.DIRECTION_ALL}]
    ]
});
hammertime.on('swiperight', function() {
    onToRightEventHandler();
});
hammertime.on('swipeup', function () {
    onToUpEventHandler();
});
hammertime.on('swipeleft', function () {
    onToLeftEventHandler();
});
hammertime.on('swipedown', function () {
    onToDownEventHandler();
});

function moveCellToRight() {
    var isChanged = false;

    for (var rowIndex = 0; rowIndex < 4; rowIndex++) {
        for (var columnIndex = 2; columnIndex >= 0; columnIndex--) {
            if (grid[rowIndex][columnIndex] === 0) continue;

            var theEmptyCellIndex = findTheFirstRightCell(rowIndex, columnIndex);
            if (theEmptyCellIndex !== -1) {
                grid[rowIndex][theEmptyCellIndex] = grid[rowIndex][columnIndex];
                grid[rowIndex][columnIndex] = 0;
                isChanged = true;
            }
            var currentIndex = theEmptyCellIndex === -1 ? columnIndex : theEmptyCellIndex;

            if (grid[rowIndex][currentIndex] === grid[rowIndex][currentIndex + 1]) {
                grid[rowIndex][currentIndex + 1] += grid[rowIndex][currentIndex];
                grid[rowIndex][currentIndex] = 0;

                score += grid[rowIndex][currentIndex + 1];

                isChanged = true;

                currentCount--;
            }

        }
    }

    return isChanged;
}

function findTheFirstRightCell(rowIndex, columnIndex) {
    for (let i = 3; i > columnIndex; i--) {
        if (grid[rowIndex][i] === 0) {
            return i;
        }
    }

    return -1;
}

function rotateArray(rotateCount = 1) {
    for (var i = 0; i < rotateCount; i++) {
        grid = rotateArrayToRightOnce(grid);
    }

    function rotateArrayToRightOnce(array) {
        return array.map((row, rowIndex) => {
                return row.map((item, columnIndex) => {
                    return array[3 - columnIndex][rowIndex];
    })
    })
    }
}

function checkGameOver() {
    if (currentCount !== maxCount) return false;

    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (grid[i][j] === grid[i][j - 1] ||
                grid[i][j] === grid[i][j + 1] ||
                (grid[i-1] && grid[i][j] === grid[i - 1][j]) ||
                (grid[i+1] && grid[i][j] === grid[i + 1][j])
            ) {
                return false;
            }
        }
    }

    return true;
}

