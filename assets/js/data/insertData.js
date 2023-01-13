import { imgLista } from './data.js';

function startApp(){
    let cardsQt = 0;

    while (cardsQt < 4 || cardsQt > 14 || cardsQt % 2 !== 0){ //adicionar verificação para ver se é NaN ou não e separar por verificação
        cardsQt = prompt('Com quantas cartas você quer jogar? Pode escolher números pares de 4 a 14 ');
    }
    cardsQt = Number(cardsQt / 2);

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

function addFunctions(){
    const cardList = document.querySelectorAll('.card');

    cardList.forEach((item)=>{
        item.addEventListener('click', () => {
            item.classList.toggle('flipped-card');
        });
        
        item.addEventListener('click', ()=>{
            verifyCard(item);
        });
    });
    
}

function verifyCard(card){
    card.classList.add('equal-verify');
    const comparedItems = document.querySelectorAll('.equal-verify');
    const maxComparedItems = 2;

    if (comparedItems.length === maxComparedItems){
        let cardOne = comparedItems[0].querySelector('.card-back img').getAttribute('src');
        let cardTwo = comparedItems[1].querySelector('.card-back img').getAttribute('src');

        if (cardOne !== cardTwo){
            setTimeout(()=>{
                comparedItems.forEach((comparedItem)=>{
                    comparedItem.classList.remove('flipped-card');
                    comparedItem.classList.remove('equal-verify');
                });
            }, 1000)
        } else {
            comparedItems.forEach((comparedItem)=>{
                comparedItem.classList.remove('flipped-card');
                comparedItem.classList.add('ok-card');
                comparedItem.classList.remove('equal-verify');
            });
        }
    }       
}

function comparador() { 
	return Math.random() - 0.5; 
}

startApp();


export {};
