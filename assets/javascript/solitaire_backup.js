

var cardProperties = {
    hearts: {
        value: [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13],
        image: ["<img src = assets/images/Ace_Hearts.png>", "<img src = assets/images/Two_Hearts.png>", 
        "<img src = assets/images/Three_Hearts.png>", "<img src = assets/images/Four_Hearts.png>",
        "<img src = assets/images/Five_Hearts.png>", "<img src = assets/images/Six_Hearts.png>", 
        "<img src = assets/images/Seven_Hearts.png>", "<img src = assets/images/Eight_Hearts.png>",
        "<img src = assets/images/Nine_Hearts.png>", "<img src = assets/images/Ten_Hearts.png>",
        "<img src = assets/images/Jack_Hearts.png>", "<img src = assets/images/Queen_Hearts.png>", 
        "<img src = assets/images/King_Hearts.png>" ],
    },
    clubs: {
        value: [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13],
        image: ["<img src = assets/images/Ace_Clubs.png>", "<img src = assets/images/Two_Clubs.png>", 
        "<img src = assets/images/Three_Clubs.png>", "<img src = assets/images/Four_Clubs.png>",
        "<img src = assets/images/Five_Clubs.png>", "<img src = assets/images/Six_Clubs.png>", 
        "<img src = assets/images/Seven_Clubs.png>", "<img src = assets/images/Eight_Clubs.png>",
        "<img src = assets/images/Nine_Clubs.png>", "<img src = assets/images/Ten_Clubs.png>",
        "<img src = assets/images/Jack_Clubs.png>", "<img src = assets/images/Queen_Clubs.png>", 
        "<img src = assets/images/King_Clubs.png>" ],
    },
    diamonds: {
        value: [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13],
        image: ["<img src = assets/images/Ace_Diamonds.png>", "<img src = assets/images/Two_Diamonds.png>", 
        "<img src = assets/images/Three_Diamonds.png>", "<img src = assets/images/Four_Diamonds.png>",
        "<img src = assets/images/Five_Diamonds.png>", "<img src = assets/images/Six_Diamonds.png>", 
        "<img src = assets/images/Seven_Diamonds.png>", "<img src = assets/images/Eight_Diamonds.png>",
        "<img src = assets/images/Nine_Diamonds.png>", "<img src = assets/images/Ten_Diamonds.png>",
        "<img src = assets/images/Jack_Diamonds.png>", "<img src = assets/images/Queen_Diamonds.png>", 
        "<img src = assets/images/King_Diamonds.png>" ],
    },
    spades: {
        value: [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13],
        image: ["<img src = assets/images/Ace_Spades.png>", "<img src = assets/images/Two_Spades.png>", 
        "<img src = assets/images/Three_Spades.png>", "<img src = assets/images/Four_Spades.png>",
        "<img src = assets/images/Five_Spades.png>", "<img src = assets/images/Six_Spades.png>", 
        "<img src = assets/images/Seven_Spades.png>", "<img src = assets/images/Eight_Spades.png>",
        "<img src = assets/images/Nine_Spades.png>", "<img src = assets/images/Ten_Spades.png>",
        "<img src = assets/images/Jack_Spades.png>", "<img src = assets/images/Queen_Spades.png>", 
        "<img src = assets/images/King_Spades.png>" ],
    },
};

var cardDeck = [];
// Create Card Deck
function createDeck() {
    for (var i = 0; i < cardProperties.hearts.value.length; i++) {
        cardDeck.push(cardProperties.hearts.value[i]);
    }

};

createDeck();
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
    console.log(cardDeck);
} // closes shuffle function

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
        } else if (i === 6 || i === 12 || i === 17 || i === 21 || i === 24 || i === 26 || i === 27) {
            stackSeven.push(cardDeck[i]);
        }
    } // Closes tableu deal

    for (var i = 28; i <= 52; i++) {
        remainingCards.push(cardDeck[i]);
    }
    console.log(stackOne); console.log(stackTwo); console.log(stackThree); console.log(stackFour); console.log(stackFive); console.log(stackSix); console.log(stackSeven); console.log(remainingCards);
} // closes deal function

$("#gameStart").on("click", function () {
    $("#gameStart").hide();
    $(".cardStacks").show();
    // for (var i = 0; i < cardDeck.length; i++) {
    //     var card = cardDeck[i];
    //     var image = $("<img>");
    //     image.attr('data-name', card);

    // $("#imageReference").append(image + " "+ i);
    // $("#imageReference").append(card);
    $("#imageReference").append(cardProperties.hearts.image[0]);
    // $("#imageReference").append(image);
    // cardDeck[i].attr('data-name', image);
    // }
    shuffle();
    deal();
});

$("#deckRemainder").on("click", function () {

}); $("#nextCard").on("click", function () {

});
// $("#diamoøndStack").on("click", function(){

// });
// $("#clubStack").on("click", function(){

// });
// $("#heartStack").on("click", function(){

// });
// $("#spadeStack").on("click", function(){

// });
$("#stackOne").on("click", function () {

});
$("#stackTwo").on("click", function () {

});
$("#stackThree").on("click", function () {

});
$("#stackFour").on("click", function () {

});
$("#stackFive").on("click", function () {

});
$("#stackSix").on("click", function () {

});
$("#stackSeven").on("click", function () {

});



