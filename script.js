let win=0;
let lose=0;
let tie=0;

let buttons = Array.from(document.querySelectorAll("button"));
let playAgain = document.createElement('div');
let btn = document.createElement('button');

let para = document.getElementById('result');
let paraWins = document.getElementById('win');
let paraLose = document.getElementById('lose');
let paraTies = document.getElementById('tie');
let displayResult = document.getElementById('display-result');
let imgDisplay = document.getElementById('images');    

playAgain.style.cssText = "margin: 24px 0; display: flex; width: 100%; justify-content: center; ";
btn.style.cssText = " background: url(./img/play-again.png) no-repeat; background-size: 45%; background-position: center;"
playAgain.append(btn);

for(let button of buttons){
    button.addEventListener('click',playRound);
}

btn.addEventListener('click',Again);


function computerPlay(){
    const options=['rock','scissors','paper'];
    let computerChoice=Math.floor(Math.random()*3);
    
    return options[computerChoice];
}

function playRound(e){
    let result;

    let computerSelection = computerPlay();
    let playerSelection = e.target.value;

    if(playerSelection===computerSelection){
        result=`${playerSelection} ties ${computerSelection}`;
        tie++;
    }else if((playerSelection==='rock' && computerSelection==='scissors') || (playerSelection==='scissors' && computerSelection==='paper') || (playerSelection==='paper' && computerSelection==='rock')){
        result=`You Win!, ${playerSelection} beats ${computerSelection}`;
        win++;
    }else{
        result = `You Lose!, ${computerSelection} beats ${playerSelection}`;
        lose++;
    }

    let playerChoise = document.getElementById('player');
    let enemyChoise = document.getElementById('enemy');
    let enemyText = document.getElementById('enemy-text');

    playerChoise.style.backgroundImage="none";

    if(playerSelection==='rock'){
        playerChoise.style.cssText="background: url(./img/rock.png) no-repeat; background-size: 40%; background-position: center; background-position-y: 70px";
    }else if(playerSelection==='paper'){
        playerChoise.style.cssText="background: url(./img/paper.png) no-repeat; background-size: 40%; background-position: center; background-position-y: 70px";
    }else if(playerSelection==='scissors'){
        playerChoise.style.cssText="background: url(./img/scissors.png) no-repeat; background-size: 40%; background-position: center; background-position-y: 70px";
    }

    enemyText.style.transform="scaleX(-1)";

    if(computerSelection==='rock'){
        enemyChoise.style.cssText="background: url(./img/rock.png) no-repeat; background-size: 40%; background-position: center; background-position-y: 70px; transform: scaleX(-1);";
    }else if(computerSelection==='paper'){
        enemyChoise.style.cssText="background: url(./img/paper.png) no-repeat; background-size: 40%; background-position: center; background-position-y: 70px; transform: scaleX(-1);";
    }else if(computerSelection==='scissors'){
        enemyChoise.style.cssText="background: url(./img/scissors.png) no-repeat; background-size: 40%; background-position: center; background-position-y: 70px; transform: scaleX(-1);";
    }

    if(win===5 || lose===5){
        for(let button of buttons){
            button.disabled=true;
            button.style.cursor = 'default';
        }

        displayResult.replaceChild(playAgain,imgDisplay);
        enemyChoise.style.backgroundImage = "none";
        playerChoise.style.backgroundImage = "none";

        if(win===5){
            para.textContent = "Congratulations!, you won!";
        }else if(lose===5){
            para.textContent = "Ouch!, you lost";
        }

    }else{
        para.textContent=result;
    }

    paraWins.textContent = `Win: ${win}`;
    paraLose.textContent = `Lose: ${lose}`;
    paraTies.textContent = `Tie: ${tie}`;
    
}

function Again(){
    win=0;
    lose=0;
    tie=0;

    para.textContent = '';
    paraWins.textContent = `Win: ${win}`;
    paraLose.textContent = `Lose: ${lose}`;
    paraTies.textContent = `Tie: ${tie}`;

    for(let button of buttons){
        button.disabled=false;
        button.style.cursor = 'pointer';
    }

    displayResult.replaceChild(imgDisplay,playAgain);
}



