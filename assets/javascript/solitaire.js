

var cardDeck = [
    "Ace Hearts", "Two Hearts", "Three Hearts", "Four Hearts", "Five Hearts", "Six Hearts", "Seven Hearts", "Eight Hearts", "Nine Hearts", "Ten Hearts", "Jack Hearts", "Queen Hearts", "King Hearts",
    "Ace Clubs", "Two Clubs", "Three Clubs", "Four Clubs", "Five Clubs", "Six Clubs", "Seven Clubs", "Eight Clubs", "Nine Clubs", "Ten Clubs", "Jack Clubs", "Queen Clubs", "King Clubs",
    "Ace Diamonds", "Two Diamonds", "Three Diamonds", "Four Diamonds", "Five Diamonds", "Six Diamonds", "Seven Diamonds", "Eight Diamonds", "Nine Diamonds", "Ten Diamonds", "Jack Diamonds", "Queen Diamonds", "King Diamonds",
    "Ace Spades", "Two Spades", "Three Spades", "Four Spades", "Five Spades", "Six Spades", "Seven Spades", "Eight Spades", "Nine Spades", "Ten Spades", "Jack Spades", "Queen Spades", "King Spades",
];


$(".cardStacks").hide();

console.log(cardDeck);

var stackOne = [];
var stackTwo = [];
var stackThree = [];
var stackFour = [];
var stackFive = [];
var stackSix = [];
var stackSeven = [];
var remainingCards = [];

function shuffle() {
    for (var i = 0; i < 5; i++) {
        var currentIndex = cardDeck.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = cardDeck[currentIndex];
            cardDeck[currentIndex] = cardDeck[randomIndex];
            cardDeck[randomIndex] = temporaryValue;
        }
    }
    $("#gameStart").hide();
    $(".cardStacks").show();
    console.log(cardDeck);
    deal();
}

function deal() {
    for (var i = 0; i <= 27; i++) {
        if (i === 0) {
            stackOne.push(cardDeck[i]);
        } else if (i === 1 || i === 7) {
            stackTwo.push(cardDeck[i]);
        } else if (i === 2 || i === 8 || i === 13) {
            stackThree.push(cardDeck[i]);
        } else if (i === 3 || i === 9 || i === 14 || i === 18) {
            stackFour.push(cardDeck[i]);
        } else if (i === 4 || i === 10 || i === 15 || i === 19 || i === 22) {
            stackFive.push(cardDeck[i]);
        } else if (i === 5 || i === 11 || i === 16 || i === 20 || i === 23 || i === 25) {
            stackSix.push(cardDeck[i]);
        } else if (i === 6 || i === 12 || i === 17 || i === 21 || i === 24 || i === 26 || i === 27 ) {
            stackSeven.push(cardDeck[i]);
        }
    } // Closes tableu deal

    for (var i = 28; i <= 52; i++) {
        remainingCards.push(cardDeck[i]);
    }
    console.log(stackOne);
    console.log(stackTwo);
    console.log(stackThree);
    console.log(stackFour);
    console.log(stackFive);
    console.log(stackSix);
    console.log(stackSeven);
    console.log(remainingCards);
}

$("#gameStart").on("click", shuffle);
