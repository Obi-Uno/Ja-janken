
function tempAlert(msg,duration)
{
 var el = document.createElement("div");
 el.setAttribute("style","position:absolute;top:0%;left:0%;background-color:peachpuff;","font-size:100px");
 el.innerHTML = `<h1 style="font-size: 100px;">${msg}</h1>`;
 setTimeout(function(){
  el.parentNode.removeChild(el);
 },duration);
 document.body.appendChild(el);
}
tempAlert("choose options from the bottom to start the game",5000);

let playerChoice =0;
let cpuChoice =0;
let cWin=0;
let pWin=0;
const pPhoto =["rock.jpeg","paper.jpg","scissor_left.jpeg"];
const cPhoto =["rock.jpeg","paper.jpg","scissor_right.jpeg"];

const btn = document.querySelectorAll('button');
const ps = document.querySelector('.ps');
const cs = document.querySelector('.cs');
const dis_play =document.querySelector('.player');
const dis_cpu =document.querySelector('.cpu');

const playerClass =['r','p','s'];

function cpuReturn(){
    
    let choice = -1;
    choice = Math.floor(Math.random()*3)+1;  
 cpuChoice =choice;
}

// function to check who is the winner
function checkWin(){
    if ( playerChoice==1 && cpuChoice==2)
    cWin++;

    else if ( playerChoice==2 && cpuChoice==1)
    pWin++;

    else if ( playerChoice==2 && cpuChoice==3)
    cWin++;

    else if ( playerChoice==1 && cpuChoice==3)
    pWin++;

    else if ( playerChoice==3 && cpuChoice==2)
     pWin++;

    else if ( playerChoice==3 && cpuChoice==1)
    cWin++;
}



const out = document.querySelector('.score');


btn.forEach((player)=>{
    player.addEventListener('click' , function(e){
        for(let i=0;i<3;i++){
        if(player.classList.contains(playerClass[i]))
    {    playerChoice=i+1;
        // console.log(playerChoice);
       do{
        cpuReturn();
       }while(playerChoice==cpuChoice)
        checkWin();
        console.log( "cpu :"+ cpuChoice );
        console.log( "player"+ playerChoice);
        ps.textContent=`                      Player score :  ${pWin}      `;
        cs.textContent=`                      computer score :  ${cWin}      `;
        dis_play.innerHTML=`<img src="images/${pPhoto[i]}" style="width: 100%; height: 100%;" >` ;
        dis_cpu.innerHTML=`<img src="images/${cPhoto[cpuChoice-1]}" style="width: 100%; height: 100%;" >` ;

    }
    }
    })
    
});

cs.style.cssText = 'font-size : 80px ; color: blue; text-align :center';
ps.style.cssText = 'font-size : 80px ; color: blue; text-align :center';

