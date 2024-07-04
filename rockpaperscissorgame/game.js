let userScore=0;
let compScore=0;
const userScorePara=document.querySelector("#users-score");
const compScorePara=document.querySelector("#comps-score");

const choices=document.querySelectorAll(".choice-option");
const genrCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const rdmIdx=Math.floor(Math.random()*3);
    return options[rdmIdx];
};
const msg=document.querySelector("#messg")

const showWinner=(userWin ,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    
    }else{
        compScore++;
        compScorePara.innerText=compScore;
         msg.innerText=`You lost! ${compChoice} beats yours ${userChoice}`;;
         msg.style.backgroundColor="red";
    }
};
const drawGame=()=>{
    msg.innerText="Game draw ,Play again!";
   
    msg.style.backgroundColor="rgb(250, 232, 152)";
};
const playGame=(userChoice)=>{
    
    const compChoice= genrCompChoice();
   
    if(userChoice===compChoice ){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if (userChoice=== "paper"){
            userWin=compChoice==="scissor"?false:true;

        }else{
          userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin, userChoice,compChoice)

    }

}
choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});