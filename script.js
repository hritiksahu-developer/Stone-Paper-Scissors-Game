let choices = document.querySelectorAll(".choice");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let winmsg = document.querySelector("#msg");
let resetBtn = document.querySelector("#reset");
let userPoint = 0;
let compPoint = 0;

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        showWinner(userChoice);
    })
});
const getcompChoice = () => {
    options = ["Rock", "Paper", "Scissors"];
    index = Math.floor(Math.random()*3);
    return options[index];
};

const showWinner = (userChoice) => {
    //console.log(`User choice =`,userChoice);
    let compChoice = getcompChoice();
    //console.log(`Computer choice =`,compChoice);
    if(userChoice === compChoice){
        gameDraw();
        return;
    }
    let userWin = true;
    if(userChoice === "Rock"){
        userWin = compChoice === "Paper" ? false : true;
    }else if(userChoice === "Paper"){
        userWin = compChoice === "Scissors" ? false : true;
    }else if(userChoice === "Scissors"){
        userWin = compChoice === "Rock" ? false : true;
    }
    checkWinner(userWin)
};
const gameDraw = () => {
    //console.log("Game Draw, Try Again...!");
    winmsg.innerText = "Game-Draw, Play Again.";
    winmsg.style.backgroundColor = "Purple";
};
const checkWinner = (userWin) => {
    if(userWin === true){
        //console.log(`Congratulations, User Won the Game`);
        userPoint++;
        userScore.innerText = userPoint;
        winmsg.innerText = `Congrat's, You Win.`;
        winmsg.style.backgroundColor = "Green";
    }else{
        //console.log(`You loose.`)
        compPoint++;
        compScore.innerText = compPoint;
        winmsg.innerText = `You lose!`;
        winmsg.style.backgroundColor = "Maroon";
    }
};
resetBtn.addEventListener("click", () => {
    compPoint = 0;
    userPoint = 0;
    compScore.innerText = 0;
    userScore.innerText = 0;
    winmsg.innerText = "New Game Start";
    winmsg.style.backgroundColor = "Brown";
});