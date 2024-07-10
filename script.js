document.addEventListener("DOMContentLoaded", () => {
    const cardArray = [
        { name: '1', img: '1' },
        { name: '1', img: '1' },
        { name: '2', img: '2' },
        { name: '2', img: '2' },
        { name: '3', img: '3' },
        { name: '3', img: '3' },
        { name: '4', img: '4' },
        { name: '4', img: '4' },
        { name: '5', img: '5' },
        { name: '5', img: '5' },
        { name: '6', img: '6' },
        { name: '6', img: '6' },
        { name: '7', img: '7' },
        { name: '7', img: '7' },
        { name: '8', img: '8' },
        { name: '8', img: '8' }
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const gameBoard = document.getElementById('game-board');
    const grid = document.createElement('div');
    gameBoard.appendChild(grid);

    let chosenCards = [];
    let chosenCardIds = [];
    let cardsWon = [];

    function createBoard() {
        cardArray.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.setAttribute('class', 'card');
            cardElement.setAttribute('data-id', index);
            cardElement.addEventListener('click', flipCard);
            grid.appendChild(cardElement);
        });
    }

    function flipCard() {
        const cardId = this.getAttribute('data-id');
        chosenCards.push(cardArray[cardId].name);
        chosenCardIds.push(cardId);
        this.innerText = cardArray[cardId].img;
        this.classList.add('flipped');
        if (chosenCards.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('.card');
        const optionOneId = chosenCardIds[0];
        const optionTwoId = chosenCardIds[1];

        if (chosenCards[0] === chosenCards[1] && optionOneId !== optionTwoId) {
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(chosenCards);
        } else {
            cards[optionOneId].innerText = '';
            cards[optionOneId].classList.remove('flipped');
            cards[optionTwoId].innerText = '';
            cards[optionTwoId].classList.remove('flipped');
        }

        chosenCards = [];
        chosenCardIds = [];

        if (cardsWon.length === cardArray.length / 2) {
            alert('Congratulations! You found all the matches!');
        }
    }

    createBoard();
});
