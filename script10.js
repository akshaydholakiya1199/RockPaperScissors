                        //Declarations 
let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const choices = document.querySelectorAll(".choice");

                        //Function 

//read the users choice
choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

//to generate computer choice
const genCompChoice = () => {
    //rock,paper,scissors - choice randomly
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);//choice number 0,1,2
    return options[randIdx]; //in a options arr randIdc(0,1,2)

};

//what if game draw??
const drawGame = () => {
    msg.innerText = "Game was draw.Play again.";
    msg.style.backgroundColor = "#081b31";
};

//show Winner if userWin or loose
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = ` You lose! ${compChoice} beats Your ${userChoice}` ;
        msg.style.backgroundColor = "red";
    }
};


                                //main game function
const playGame = (userChoice) => {

    //to generate computer choice
    const compChoice = genCompChoice();

    //fighting between user and comp
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors or paper
            userWin = compChoice === "paper" ? false : true ;
        }
        else if(userChoice === "paper"){
            //rock ,scissors
            userWin = compChoice === "rock" ? true : false ;
        }
        else{
            // rock , paper
            userWin = compChoice === "rock" ? false : true ; 
        }
        showWinner(userWin ,userChoice,compChoice);
    }
};