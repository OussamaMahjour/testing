//board
var unitSize = 20;
var boardDimension = [35,35];
var board;
var graphic;

//snake
var snakeCoordinate = [unitSize*5,unitSize*5];
var snakeBody = [];
var velocityX = 0;
var velocityY = 0;

//food
var food ;

window.onload = function() {
    board = document.getElementById("board");
    board.height = unitSize * boardDimension[1];
    board.width = boardDimension[0] * unitSize; 
    graphic = board.getContext("2d");
    spawn();
    document.addEventListener("keyup",Move);
    setInterval(update,100);

}




function  update(){
    graphic.fillStyle = "#131212";
    graphic.fillRect(0,0,board.width,board.height);

    //draw food
    graphic.fillStyle = "red";
    graphic.fillRect(food[0],food[1],unitSize,unitSize);
    checkCollision();
    
    //make the body follow the head
    for(let i =snakeBody.length-1;i>0;i--){
        snakeBody[i] = snakeBody[i-1]
    }
    if(snakeBody.length){
        snakeBody[0] = [snakeCoordinate[0],snakeCoordinate[1]];
    }

    //move head
    snakeCoordinate[0]+=velocityX*unitSize;
    snakeCoordinate[1]+=velocityY*unitSize;

    //draw head
    graphic.fillStyle = "lime";
    graphic.fillRect(snakeCoordinate[0],snakeCoordinate[1],unitSize,unitSize);
    
    //draw body
    for(let i=0;i <snakeBody.length;i++){
        graphic.fillRect(snakeBody[i][0],snakeBody[i][1],unitSize,unitSize)
    }
}


function  spawn(){
    let foodX = Math.floor(Math.random()*boardDimension[0])*unitSize;
    let foodY = Math.floor(Math.random() * boardDimension[1])*unitSize;
    food = [foodX,foodY];
}

function Move(e){
    if(e.code == "ArrowUp" && velocityY !=1){
        velocityX = 0;
        velocityY = -1;
    }else  if(e.code == "ArrowDown" && velocityY !=-1){
        velocityX = 0;
        velocityY = 1;
    }
    else  if(e.code == "ArrowLeft" && velocityX !=1){
        velocityX = -1;
        velocityY = 0;
    }
    else  if(e.code == "ArrowRight" && velocityX !=-1){
        velocityX = 1;
        velocityY = 0;
    }

}
function checkCollision(){
    if(snakeCoordinate[0] == food[0] && snakeCoordinate[1] == food[1]){
        snakeBody.push(food);
        spawn()

    }
}