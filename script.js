 function cpuReturn(){
    let choice = Math.floor(Math.random()*3)+1;
return choice;
}
//janken is rock paper scissor in japanaese
function toJanken( num){
    let play;
    if( num==1)
    play="Rock" ;
    else if(num==2)
    play="Paper";
    else 
    play="Scissor";
return play;
}

function toNmber(string){
    let  num;
    if(string=='rock')
      num=1;
    if(string=='paper')
    num=2;
    if(string=='scisssor')
    num=3; 
    return num;
}

function checkWin( player,Cpu){
   let output;
    if (player+1)
}