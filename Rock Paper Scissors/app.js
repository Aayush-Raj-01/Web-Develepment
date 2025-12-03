let userScore = 0;
let compeScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#compe");

const genCompChoice = () => {
    const options = ["Rock","Paper","Scissors"];
    const randIdx= Math.floor(Math.random() * 3);
    return options[randIdx];
};
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WIN !! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }
    else{
        compeScore++;
        compScorePara.innerText = compeScore;
        msg.innerText = `YOU LOSE !! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
}

const drawGame = () => {
    msg.innerText = "GAME DRAW !!"
    msg.style.backgroundColor = "#081b31";
}
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice == compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice == "Rock"){
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper"){
            userWin = compChoice==="Scissors" ? false : true;
        }
        else {
            userWin = compChoice === "Rock" ? false : true ;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})