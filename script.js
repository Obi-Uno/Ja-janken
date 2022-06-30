let playerChoice =0;
let cpuChoice =0;
let cWin=0;
let pWin=0;
const btn = document.querySelectorAll('button');
const ps = document.querySelector('.ps');
const cs = document.querySelector('.cs');


const playerClass =['r','p','s'];

function cpuReturn(){
    let choice = Math.floor(Math.random()*3)+1;  
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
       
        cpuReturn();
        checkWin();
        console.log( "cpu :"+ cWin );
        console.log( "player"+ pWin);
        ps.textContent=`                      player score :  ${pWin}      `;
        cs.textContent=`                      computer score :  ${cWin}      `;

    }
    }
    })
    
});


