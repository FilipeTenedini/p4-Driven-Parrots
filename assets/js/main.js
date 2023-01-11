// pergunta o número de cartas
// verifica se o número está entre 4 e 14
// verifica se o número % 2 é 0
// caso não seja fica no loop, caso seja, quebra o loop.


// 
const card = document.querySelector('.card')

card.addEventListener('click', () => {
    card.classList.toggle('flipped-card')

    // card.classList.toggle('flipped-card')
})