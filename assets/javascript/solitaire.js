

var cardDeck = {
    aceHearts: {
        value: "",
        image: "",
    },
    twoHearts: {
        value: "",
        image: "",
    },
    threeHearts: {
        value: "",
        image: "",
    },
    fourHearts: {
        value: "",
        image: "",
    },
    fiveHearts: {
        value: "",
        image: "",
    },
    sixHearts: {
        value: "",
        image: "",
    },
    sevenHearts: {
        value: "",
        image: "",
    },
    eightHearts: {
        value: "",
        image: "",
    },
    nineHearts: {
        value: "",
        image: "",
    },
    tenHearts: {
        value: "",
        image: "",
    },
    jackHearts: {
        value: "",
        image: "",
    },
    queenHearts: {
        value: "",
        image: "",
    },
    kingHearts: {
        value: "",
        image: "",
    },
    aceClubs: {
        value: "",
        image: "",
    },
    twoClubs: {
        value: "",
        image: "",
    },
    threeClubs: {
        value: "",
        image: "",
    },
    fourClubs: {
        value: "",
        image: "",
    },
    fiveClubs: {
        value: "",
        image: "",
    },
    sixClubs: {
        value: "",
        image: "",
    },
    sevenClubs: {
        value: "",
        image: "",
    },
    eightClubs: {
        value: "",
        image: "",
    },
    nineClubs: {
        value: "",
        image: "",
    },
    tenClubs: {
        value: "",
        image: "",
    },
    jackClubs: {
        value: "",
        image: "",
    },
    queenClubs: {
        value: "",
        image: "",
    },
    kingClubs: {
        value: "",
        image: "",
    },
    aceDiamonds: {
        value: "",
        image: "",
    },
    twoDiamonds: {
        value: "",
        image: "",
    },
    threeDiamonds: {
        value: "",
        image: "",
    },
    fourDiamonds: {
        value: "",
        image: "",
    },
    fiveDiamonds: {
        value: "",
        image: "",
    },
    sixDiamonds: {
        value: "",
        image: "",
    },
    sevenDiamonds: {
        value: "",
        image: "",
    },
    eightDiamonds: {
        value: "",
        image: "",
    },
    nineDiamonds: {
        value: "",
        image: "",
    },
    tenDiamonds: {
        value: "",
        image: "",
    },
    jackDiamonds: {
        value: "",
        image: "",
    },
    queenDiamonds: {
        value: "",
        image: "",
    },
    kingDiamonds: {
        value: "",
        image: "",
    },
    aceSpades: {
        value: "",
        image: "",
    },
    twoSpades: {
        value: "",
        image: "",
    },
    threeSpades: {
        value: "",
        image: "",
    },
    fourSpades: {
        value: "",
        image: "",
    },
    fiveSpades: {
        value: "",
        image: "",
    },
    sixSpades: {
        value: "",
        image: "",
    },
    sevenSpades: {
        value: "",
        image: "",
    },
    eightSpades: {
        value: "",
        image: "",
    },
    nineSpades: {
        value: "",
        image: "",
    },
    tenSpades: {
        value: "",
        image: "",
    },
    jackSpades: {
        value: "",
        image: "",
    },
    queenSpades: {
        value: "",
        image: "",
    },
    kingSpades: {
        value: "",
        image: "",
    },

};

var images = {
    aceHearts: "assets/images/Ace_Clubs.png",
}







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



