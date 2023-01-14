const scoreboard = {
    time: 0,
    attempts: 0
}

function startTimer(){

     let counter = setInterval(()=>{
        scoreboard.time += 1
        document.querySelector('h2 span').innerHTML = scoreboard.time;
    }, 1000);
}


function isWin(){
    const cardsQt = document.querySelectorAll('.card').length;
    const okCards = document.querySelectorAll('.ok-card').length
    if (okCards === cardsQt){
        clearInterval(counter);
        alert(`Você conseguiu em ${scoreboard.time} segundos e ${scoreboard.attempts} jogadas`);
        
    }
}

// só falta travar o timer quando ganho e impedir de clicar em cartas enquanto o setTimeout estiver acontecendo.
export { scoreboard, startTimer, isWin };