//board
var blockSize = 25;
var row = 25;
var col = 40;
var board;
var context;

var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var snakeBody = [];

var velocityX = 0;
var velocityY = 0;

var foodX;
var foodY;

var gameOver = false;

window.onload = function() {
    board = document.getElementById("board");
    board.height = row * blockSize;
    board.width = col * blockSize;
    context = board.getContext("2d"); //drawing on board

    foodPlace();
    // updated();
    document.addEventListener("keyup", changeDirection);
    setInterval(updated, 1000 / 5);
}

function updated() {
    if (gameOver) {
        window.location.reload();
    }
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY])
        foodPlace();
    }
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }
    context.fillStyle = "blue";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize)
    }
    if (snakeX > blockSize * 39) {
        snakeX = blockSize * 0;
    }
    if (snakeX < blockSize * 0) {
        snakeX = blockSize * 39;
    }
    if (snakeY > blockSize * 24) {
        snakeY = blockSize * 0;
    }
    if (snakeY < blockSize * 0) {
        snakeY = blockSize * 25;
    }
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert('game over');
        }
    }
}

function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    } else if (e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if (e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}
// buttom moving
function changeDirectionBtn(index) {
    if (index == 1 && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if (index == 2 && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    } else if (index == 3 && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if (index == 4 && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

function foodPlace() {
    foodX = Math.floor(Math.random() * col) * blockSize;
    foodY = Math.floor(Math.random() * row) * blockSize;
}