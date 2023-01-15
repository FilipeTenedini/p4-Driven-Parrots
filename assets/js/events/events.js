import { scoreboard, isWin } from '../counters/counters.js';

function addFunctions(){
    const cardList = document.querySelectorAll('.card');

    cardList.forEach((item)=>{
        item.addEventListener('click', () => {
            item.classList.toggle('flipped-card');
            verifyCard(item);
            attemptCounter(); 
            isWin();
        });

    });
}

function verifyCard(card){
    card.classList.add('equal-verify', 'no-pointer-event');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    const comparedItems = document.querySelectorAll('.equal-verify');
    const maxComparedItems = 2;
    const body = document.querySelector('body');

    if (comparedItems.length === maxComparedItems){
        body.classList.add('no-pointer-event');

        let cardOne = comparedItems[0].querySelector('.card-back img').src;
        let cardTwo = comparedItems[1].querySelector('.card-back img').src;

        if (cardOne !== cardTwo){
            setTimeout(()=>{
                comparedItems.forEach((comparedItem)=>{
                    comparedItem.classList.remove('flipped-card', 'equal-verify', 'no-pointer-event');
                    body.classList.remove('no-pointer-event');
                });
            }, 1000)
        } else {
            comparedItems.forEach((comparedItem)=>{
                comparedItem.classList.remove('flipped-card', 'equal-verify');
                comparedItem.classList.add('ok-card');
                body.classList.remove('no-pointer-event');
            });
        }
    }       
}

function attemptCounter() {
    scoreboard.attempts += 1;
}

export { addFunctions, verifyCard };