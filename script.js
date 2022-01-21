game();

function game(){
    let win=0;
    let lose=0;
    let tie=0;

    while(win < 5 && lose < 5){
        const playerSelection=prompt('abc').toLowerCase();
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
}

function computerPlay(){
    const options=['rock','scissors','paper'];
    let computerChoice=Math.floor(Math.random()*3);
    
    return options[computerChoice];
}

function playRound(playerSelection,computerSelection){
    let result;
    let win;
    let lose;
    let tie;

    if(playerSelection===computerSelection){
        result=`${playerSelection} ties ${computerSelection}`;
        tie=1;
    }else if((playerSelection==='rock' && computerSelection==='scissors') || (playerSelection==='scissors' && computerSelection==='paper') || (playerSelection==='paper' && computerSelection==='rock')){
        result=`You Win!, ${playerSelection} beats ${computerSelection}`;
        win=1;
    }else{
        result = `You Lose!, ${computerSelection} beats ${playerSelection}`;
        lose=1;
    }

    return [result, win, lose, tie];
}

