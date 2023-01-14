import { imgLista } from './data.js';
import { addFunctions } from '../events/events.js';
import { startTimer } from '../counters/counters.js';

function startApp(){
    let cardsQt = 0;

    while (cardsQt < 4 || cardsQt > 14 || cardsQt % 2 !== 0){ //adicionar verificação para ver se é NaN ou não e separar por verificação
        cardsQt = prompt('Com quantas cartas você quer jogar? Pode escolher números pares de 4 a 14 ');
    }
    cardsQt = Number(cardsQt / 2);
    startTimer();
    createData(cardsQt);
}

function createData(nmr) {
    const cards = [];

    for (let i = 0; i < nmr; i++){
        cards.push(imgLista[i]);
        cards.push(imgLista[i]);
    }
    
    cards.sort(comparador);

    insertData(cards);
    addFunctions();
}

function insertData(array){
    array.forEach((item)=>{
        document.querySelector('.board').innerHTML +=`
        <div data-test="card" class="card-container">
            <div class="card">
                <div class="card-front">
                    <img src="assets/images/back.png" data-test="face-down-image" alt="">
                </div>
                <div class="card-back flipped-card">
                    <img src="assets/images/${item}" data-test="face-up-image" alt="">
                </div>
            </div>
        </div>
        `
    });
}

function comparador() { 
	return Math.random() - 0.5; 
}

startApp();


export { startApp };
