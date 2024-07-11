document.addEventListener("DOMContentLoaded", () => {
    const cardArray = [
        { name: 'sticker1', img: 'images/sticker1.png' },
        { name: 'sticker1', img: 'images/sticker1.png' },
        { name: 'sticker2', img: 'images/sticker2.png' },
        { name: 'sticker2', img: 'images/sticker2.png' },
        { name: 'sticker3', img: 'images/sticker3.png' },
        { name: 'sticker3', img: 'images/sticker3.png' },
        { name: 'sticker4', img: 'images/sticker4.png' },
        { name: 'sticker4', img: 'images/sticker4.png' },
        { name: 'sticker5', img: 'images/sticker5.png' },
        { name: 'sticker5', img: 'images/sticker5.png' },
        { name: 'sticker6', img: 'images/sticker6.png' },
        { name: 'sticker6', img: 'images/sticker6.png' },
        { name: 'sticker7', img: 'images/sticker7.png' },
        { name: 'sticker7', img: 'images/sticker7.png' },
        { name: 'sticker8', img: 'images/sticker8.png' },
        { name: 'sticker8', img: 'images/sticker8.png' },
        { name: 'sticker9', img: 'images/sticker9.png' },
        { name: 'sticker9', img: 'images/sticker9.png' },
        { name: 'sticker10', img: 'images/sticker10.png' },
        { name: 'sticker10', img: 'images/sticker10.png' },
        { name: 'sticker11', img: 'images/sticker11.png' },
        { name: 'sticker11', img: 'images/sticker11.png' },
        { name: 'sticker12', img: 'images/sticker12.png' },
        { name: 'sticker12', img: 'images/sticker12.png' },
        { name: 'sticker13', img: 'images/sticker13.png' },
        { name: 'sticker13', img: 'images/sticker13.png' },
        { name: 'sticker14', img: 'images/sticker14.png' },
        { name: 'sticker14', img: 'images/sticker14.png' },
        { name: 'sticker15', img: 'images/sticker15.png' },
        { name: 'sticker15', img: 'images/sticker15.png' },
        { name: 'sticker16', img: 'images/sticker16.png' },
        { name: 'sticker16', img: 'images/sticker16.png' },
        { name: 'sticker17', img: 'images/sticker17.png' },
        { name: 'sticker17', img: 'images/sticker17.png' },
        { name: 'sticker18', img: 'images/sticker18.png' },
        { name: 'sticker18', img: 'images/sticker18.png' }
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const gameBoard = document.getElementById('game-board');
    let chosenCards = [];
    let chosenCardIds = [];
    let cardsWon = [];

    function createBoard() {
        cardArray.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.setAttribute('class', 'card');
            cardElement.setAttribute('data-id', index);
            cardElement.addEventListener('click', flipCard);
            const cardImg = document.createElement('img');
            cardImg.setAttribute('src', card.img);
            cardElement.appendChild(cardImg);
            gameBoard.appendChild(cardElement);
        });
    }

    function flipCard() {
        if (chosenCards.length < 2) {
            const cardId = this.getAttribute('data-id');
            if (!chosenCardIds.includes(cardId)) {
                chosenCards.push(cardArray[cardId].name);
                chosenCardIds.push(cardId);
                this.classList.add('flipped');
                if (chosenCards.length === 2) {
                    setTimeout(checkForMatch, 500);
                }
            }
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('.card');
        const optionOneId = chosenCardIds[0];
        const optionTwoId = chosenCardIds[1];

        if (chosenCards[0] === chosenCards[1]) {
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(chosenCards);
        } else {
            cards[optionOneId].classList.remove('flipped');
            cards[optionTwoId].classList.remove('flipped');
        }

        chosenCards = [];
        chosenCardIds = [];

        if (cardsWon.length === cardArray.length / 2) {
            alert('Parabéns, já pareces o Rui Rocha!');
        }
    }

    createBoard();
});
