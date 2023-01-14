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
    card.classList.add('equal-verify');
    const comparedItems = document.querySelectorAll('.equal-verify');
    const maxComparedItems = 2;

    if (comparedItems.length === maxComparedItems){
        let cardOne = comparedItems[0].querySelector('.card-back img').getAttribute('src');
        let cardTwo = comparedItems[1].querySelector('.card-back img').getAttribute('src');

        if (cardOne !== cardTwo){
            setTimeout(()=>{
                comparedItems.forEach((comparedItem)=>{
                    comparedItem.classList.remove('flipped-card', 'equal-verify');
                });
            }, 1000)
        } else {
            comparedItems.forEach((comparedItem)=>{
                comparedItem.classList.remove('flipped-card', 'equal-verify');
                comparedItem.classList.add('ok-card');
            });
        }
    }       
}

function attemptCounter() {
    scoreboard.attempts += 1;
}

export { scoreboard, addFunctions, verifyCard };