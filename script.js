let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const genecomchoice=()=>{
    const options=["rock","paper","scissors"];
    const randind=Math.floor(Math.random()*3);
    return options[randind];
 };
 
 const winshow=(userwin,userchoice,compchoice)=>{
      if(userwin)
      {
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
      }
      else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`You Lose! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
      }
 };

 const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw .play again";
    msg.style.backgroundColor="black";
};

const playgame=(userchoice)=>{
       console.log("user choice = ",userchoice);
       const compchoice=genecomchoice();
       console.log("comp choice = ",compchoice);

       if(userchoice===compchoice)
       {
            drawgame();
       }
       else
       {
        let userwin=true;

        if(userchoice==="rock")
        {
            //scissors,paper
            userwin = compchoice==="paper" ? false : true;
        }

        else if(userchoice==="paper")
        {
            userwin=compchoice==="scissors" ? false : true;
        }
        else{
            userwin=compchoice=="rock" ? false : true;
        }
         winshow(userwin,userchoice,compchoice);
       }


};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice)
    });;
});