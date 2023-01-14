import { scoreboard } from "./counters/counters.js";
import { startApp } from './data/insertData.js';

function restart(){
    let response;
    while (true){
        response = prompt('Gostaria de reiniciar a partida? sim/não');
        if (response === 'sim'){
            clearAll();
            break;
        } if (response === 'não'){
            break;
        }
    }

}

function clearAll(){
    scoreboard.attempts = 0;
    scoreboard.time = 0;
    document.querySelector('.board').innerHTML = '';
    startApp();
}

export { restart };