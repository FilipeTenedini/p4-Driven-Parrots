import { restart } from '../restart/restart.js';

const scoreboard = {
    time: 0,
    attempts: 0
}

let counter;

function startTimer(){
     counter = setInterval(()=>{
        scoreboard.time += 1
        document.querySelector('h2 span').innerHTML = scoreboard.time;
    }, 1000);
}

function isWin(){
    const cardsQt = document.querySelectorAll('.card').length;
    const okCards = document.querySelectorAll('.ok-card').length
    if (okCards === cardsQt){
        clearInterval(counter);
        setTimeout(()=>{
            alert(`Você ganhou ${scoreboard.attempts} jogadas! A duração do jogo foi de ${scoreboard.time} segundos!`);
            clearInterval(counter); 
            restart();  
        }, 1000);

    }
}


export { scoreboard, startTimer, isWin };