//game();
let win=0;
let lose=0;
let tie=0;

let buttons = Array.from(document.querySelectorAll("button"));

for(let button of buttons){
    button.addEventListener('click',playRound);
}


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

    let para = document.getElementById('result');
    let paraWins = document.getElementById('win');
    let paraLose = document.getElementById('lose');
    let paraTies = document.getElementById('tie');

    para.textContent=result;
    paraWins.textContent = `Win: ${win}`;
    paraLose.textContent = `Lose: ${lose}`;
    paraTies.textContent = `Tie: ${tie}`;
    
    //return [result, win, lose, tie];
}

/*function game(){
    let win=0;
    let lose=0;
    let tie=0;

    while(win < 5 && lose < 5){
        //const playerSelection=prompt('abc').toLowerCase();
        const computerSelection=computerPlay();
        let result=playRound(playerSelection,computerSelection);

        console.log(result[0]);
        if(result[1]){
            win++;
        }else if(result[2]){
            lose++;
        }else if(result[3]){
            tie++;
        }
    }

    console.log(`The final result is:\nYou won ${win} times.\nYou lost ${lose} times.\nYou tied ${tie} times.`);
}*/

















