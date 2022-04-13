
let pWin =0;
let cWin =0;

function cpuReturn(){
    let choice = Math.floor(Math.random()*3)+1;
return choice;
}
//janken is rock paper scissor in japanaese
function toJanken( num){
    let play;
    if( num==1)
    play="rock" ;
    else if(num==2)
    play="paper";
    else 
    play="scissor";
return play;
}

// function toNmber(string){
//     let  num;
//     if(string=='rock')
//       num=1;
//     if(string=='paper')
//     num=2;
//     if(string=='scisssor')
//     num=3; 
//     return num;
// }

//this function updates the player score
function checkWin( player,Cpu){

    if ( player=="rock" && Cpu=="paper")
     cWin++;

     else if ( player=="paper" && Cpu=="rock")
     pWin++;

     else if ( player=="paper" && Cpu=="scissor")
     cWin++;

     else if ( player=="rock" && Cpu=="scissor")
     pWin++;

    else if ( player=="scissor" && Cpu=="paper")
      pWin++;

    else if ( player=="scissor" && Cpu=="rock")
     cWin++;
      
}


 
//updates score on the screen
function update(){
    alert("current score is :\nHuman: "+pWin +"    ||   computer : "+ cWin );
}
//main code that runs all the othe r  function together
while(pWin!=3 && cWin !=3)
{

    let input = prompt("enter , rock ,paper or scissor");
    input=input.trim();
    input=input.toLowerCase();
    let cInput = toJanken(cpuReturn());
    alert("cpu choose "+ cInput);
checkWin(input,cInput);
update();
if(pWin==3)
alert("player wins the game!!!!!");
else if(cWin==3)
{
    alert("cpu wins the game !!!!!");
}




}