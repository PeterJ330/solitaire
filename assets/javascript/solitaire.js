

var cardDeck = [
    "Ace Hearts", "Two Hearts", "Three Hearts", "Four Hearts","Five Hearts", "Six Hearts", "Seven Hearts", "Eight Hearts", "Nine Hearts","Ten Hearts", "Jack Hearts", "Queen Hearts", "King Hearts",
    "Ace Clubs", "Two Clubs", "Three Clubs", "Four Clubs","Five Clubs", "Six Clubs", "Seven Clubs", "Eight Clubs", "Nine Clubs","Ten Clubs", "Jack Clubs", "Queen Clubs", "King Clubs",
    "Ace Diamonds", "Two Diamonds", "Three Diamonds", "Four Diamonds","Five Diamonds", "Six Diamonds", "Seven Diamonds", "Eight Diamonds", "Nine Diamonds","Ten Diamonds", "Jack Diamonds", "Queen Diamonds", "King Diamonds",
    "Ace Spades", "Two Spades", "Three Spades", "Four Spades","Five Spades", "Six Spades", "Seven Spades", "Eight Spades", "Nine Spades","Ten Spades", "Jack Spades", "Queen Spades", "King Spades",
];

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
    console.log(cardDeck);
}


$(".gameStart").on("click", shuffle);
