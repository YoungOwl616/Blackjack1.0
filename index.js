let startBtn = document.querySelector("#start-btn");
let newCardBtn = document.querySelector("#new-card-btn");
let foldBtn = document.querySelector("#fold-btn");
let newGameBtn = document.querySelector("#new-game-btn");

let messageEl = document.querySelector("#message-el");
let foldMessage = document.querySelector("#fold-message");
let winMessage = document.querySelector("#win-message");
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");

let cardList = [];
let sum = 0;

function startgame() {

    startBtn.style.display = "none";
    newCardBtn.style.display = "block";
    foldBtn.style.display = "block";
    newGameBtn.style.display = "block";

    foldMessage.style.display = "none";
    winMessage.style.display = "none";

    for (let i = 0; i < 2; i++) {
        cardList.push(Math.floor(Math.random() * 13) + 1);
    }

    for (let j = 0; j < cardList.length; j++) {
        cardsEl.textContent += cardList[j] + ", ";
    }

    for (let k = 0; k < cardList.length; k++) {
        sum += parseInt(cardList[k]);
    }
    sumEl.textContent += sum;

    if (sum <= 20) {
        messageEl.textContent = "NEW CARD or FOLD?";
    } else if (sum === 21) {
        messageEl.textContent = "BLACKJACK!";
        newCardBtn.style.display = "none";
        foldBtn.style.display = "none";
    } else {
        messageEl.textContent = "You Went Over :(";
        newCardBtn.style.display = "none";
        foldBtn.style.display = "none";
    }

}

function newcard() {
    let newCard = Math.floor(Math.random() * 13) + 1;
    cardsEl.textContent += newCard + ", ";
    sum += parseInt(newCard);
    sumEl.textContent = "Score :  " + sum;

    if (sum <= 20) {
        messageEl.textContent = "NEW CARD or FOLD?";
    } else if (sum === 21) {
        messageEl.textContent = "BLACKJACK!";
        newCardBtn.style.display = "none";
        foldBtn.style.display = "none";
    } else {
        messageEl.textContent = "You Went Over :(";
        newCardBtn.style.display = "none";
        foldBtn.style.display = "none";
    }
}

function fold() {
    foldMessage.style.display = "block";
    winMessage.style.display = "block";
    newCardBtn.style.display = "none";
    foldBtn.style.display = "none";

    sumEl.style.display = "none";
    cardsEl.style.display = "none";
    messageEl.style.display = "none";

    let dealerScore = Math.floor(Math.random() * (sum + 10)) + (sum - 10);

    foldMessage.textContent = "Your score: " + sum + " // " + "House score: " + dealerScore;

    if (sum < 21) {
        if (dealerScore === 21) {
            winMessage.textContent = "House got Blackjack! You lose! 7";
        } else if (dealerScore > 21) {
            winMessage.textContent = "You beat the House! 8";
        } else if (dealerScore < 21) {
            if (dealerScore === sum) {
                winMessage.textContent = "Tie! 9";
            } else if (dealerScore > sum) {
                winMessage.textContent = "You lost to the House! 10";
            } else if (dealerScore < sum) {
                winMessage.textContent = "You beat the House! 11";
            }
        }
    }
}

function newgame() {
    sumEl.style.display = "block";
    cardsEl.style.display = "block";

    messageEl.textContent = "Want to play a round?";
    cardsEl.textContent = "Cards :  ";
    sumEl.textContent = "Score :  ";
    sum = 0;
    cardList = [];
    newCardBtn.style.display = "block";
    foldBtn.style.display = "block";

    foldMessage.style.display = "none";
    winMessage.style.display = "none";
    messageEl.style.display = "block";


    for (let h = 0; h < 2; h++) {
        cardList.push(Math.floor(Math.random() * 13) + 1);
    }
    
    for (let j = 0; j < cardList.length; j++) {
        cardsEl.textContent += cardList[j] + ", ";
    }

    for (let k = 0; k < cardList.length; k++) {
        sum += parseInt(cardList[k]);
    }
    sumEl.textContent += sum;

    if (sum <= 20) {
        messageEl.textContent = "NEW CARD or FOLD?";
    } else if (sum === 21) {
        messageEl.textContent = "BLACKJACK!";
        newCardBtn.style.display = "none";
        foldBtn.style.display = "none";
    } else {
        messageEl.textContent = "You Went Over :(";
        newCardBtn.style.display = "none";
        foldBtn.style.display = "none";
    }
}

