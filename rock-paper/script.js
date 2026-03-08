
        console.log("hello world");

function getHumanChoice(){
    let choice = prompt("enter rock , paper , scissors");
    return choice.toLowerCase(); 
}


function getComputerChoice(){
    const array=["rock","paper","scissors"];
    const randomIndex= Math.floor(Math.random()*3);
    return array[randomIndex];
}



function final(){
    let dec =0;
    for(let i=0;i<3;i++)
    {
       let human= getHumanChoice();
       let comp= getComputerChoice();

       if(human=="rock" && comp =="paper"){
        dec+=1;
       console.log("you win this round")
       }else if (human =="rock" && comp =="scissors"){
        dec+=1;
       console.log("you win this round")
       }else if (human == "paper" && comp == "rock"){
        dec-=1;
           console.log("you lose this round");
       }else if (human == "paper" && comp == "scissors"){
        dec+=1;
       console.log("you win this round")
       }else if(human =="scissors" && comp == "rock"){
        dec-=1;
           console.log("you lose this round");
       }else if(human == "scissors" && comp =="paper"){
        dec-=1;
           console.log("you lose this round");
       }

    }
    
    if(dec>0){
        console.log("you win !!");
    }else if(dec<0){
        console.log(" you Lose !!");
    }else if (dec==0){
        console.log("its a tie");
    }
}

final();