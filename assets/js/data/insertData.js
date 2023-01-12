import { imgLista } from './data.js';


function startApp(){
    let cardsQt = 0;

    while (cardsQt < 4 || cardsQt > 14 || cardsQt % 2 !== 0){
        cardsQt = prompt('Com quantas cartas você quer jogar? Pode escolher números pares de 4 a 14 ');
    }
    cardsQt = Number(cardsQt)

    createData(cardsQt);
}

function createData(nmr) {
    const cards = [];

    for (let i = 0; i < nmr; i++){
        cards.push(imgLista[i]);
        cards.push(imgLista[i]);
    }

    insertData(cards);
    flipFunction();
}

function insertData(array){
    array.forEach((item)=>{
        document.querySelector('.board').innerHTML +=`
        <div class="card-container">
            <div class="card">
                <div class="card-front">
                    <img src="assets/images/back.png" alt="">
                </div>
                <div class="card-back flipped-card">
                    <img src="${item}" alt="">
                </div>
            </div>
        </div>
        `
    });
}

function flipFunction(){
    const cardList = document.querySelectorAll('.card');

    cardList.forEach((item)=>{
        console.log(item);
        item.addEventListener('click', () => {
            item.classList.toggle('flipped-card');
        });
    });
}

startApp();


export {};
