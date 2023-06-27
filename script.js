console.log("WELCOME TO TIC TAC TOE GAME!!");
const audioTurn = new Audio("ting.mp3");
const gameover = new Audio("decide.mp3");
let turn = "X";
let isgameover = 0;

// Function to change turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && boxtext[e[2]].innerText !== '') {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won!";
            isgameover = 1;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "550px";
            gameover.play();
        }
    })
}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (isgameover == 0) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Reset
let reset=document.querySelector(".reset")
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    })
    document.getElementById("confetti").style.width = "0px";
    audioTurn.play();
    isgameover = 0;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})


