console.log("Welcome to Tic Tac Toe");

const changeTurnMusic = new Audio("/Assets/ting.mp3");
let turn = 'X';
const changeTurn = () => {
    turn = turn === 'X' ? '0' : 'X';
    document.querySelector(".info span").innerHTML = `Turn for ${turn}`;
    changeTurnMusic.play();
}

const checkWin = () => {   
    let boxes = document.querySelectorAll(".boxContent");
    let wins = [
        [0, 1, 2, 5, 5, 0, 20],
        [3, 4, 5, 5, 15, 0, 20],
        [6, 7, 8, 5, 25, 0, 20],
        [0, 3, 6, -5, 15, 90, 20],
        [2, 5, 8, 15, 15, 90, 20],
        [1, 4, 7, 5, 15, 90, 20],
        [0, 4, 8, 0, 15, 45, 30],
        [2, 4, 6, 0, 15, 135, 30],
    ];

    for (let e of wins){
        if ((boxes[e[0]].innerText === boxes[e[1]].innerText) && (boxes[e[0]].innerText === boxes[e[2]].innerText) && (boxes[e[0]].innerText !== '')) {
            let line = document.querySelector(".line");
            line.style.width = `${e[6]}vw`;
            line.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            return true;
        }
    };
    return false;
}

let count = 0;
// Game Logic
let gameMusic = new Audio("/Assets/music.mp3");
// gameMusic.play();
let gameOver = false;
let boxes = document.querySelectorAll(".boxContent");
for (let box of boxes) {
    box.addEventListener("click", () => {
        if(gameOver) {
            alert("Reset The Game To Play Again");
            gameOver = false;
        } else if (box.innerText == '') {
            count++;
            box.innerText = turn;
            if(checkWin()) {
                document.querySelector(".info span").innerHTML = `${turn} Won The Game !!!`;
                document.querySelector(".win img").style.width = "160px";
                gameOver = true;
            } else if(isBoardFull()) {
                playAgain();
            } else{
                changeTurn();
            }
            console.log(count);
        }
    });
}

let gameOverMusic = new Audio("/Assets/gameover.mp3");
const playAgain = () => {
    gameMusic.pause();
    gameOverMusic.play();
    document.querySelector(".win img").style.width = "";
    document.querySelector(".info span").innerText = "Game Over !!!";
    gameOver = false;
    count = 0;
}

const isBoardFull = () => {
    return (count === 9) && (!false);
}

// Reset button
let resetBtn = document.querySelector(".info button");
resetBtn.addEventListener("click", () => {
    let boxes = document.querySelectorAll(".container span");
    for(let box of boxes) {
        box.innerText = '';
    }
    turn = 'X';
    document.querySelector(".info span").innerHTML = "Turn for X";
    document.querySelector(".win img").style.width = "";
    gameOver = false;
    count = 0;
    document.querySelector(".line").style.width = "0";
})