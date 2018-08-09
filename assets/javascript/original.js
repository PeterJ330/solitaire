

var cardDeck = [
    "aceHearts", "twoHearts", "threeHearts", "fourHearts", "fiveHearts", "sixHearts", "sevenHearts",
    "eightHearts", "nineHearts", "tenHearts", "jackHearts", "queenHearts", "kingHearts",
    "aceClubs", "twoClubs", "threeClubs", "fourClubs", "fiveClubs", "sixClubs", "sevenClubs",
    "eightClubs", "nineClubs", "tenClubs", "jackClubs", "queenClubs", "kingClubs",
    "aceDiamonds", "twoDiamonds", "threeDiamonds", "fourDiamonds", "fiveDiamonds", "sixDiamonds", "sevenDiamonds",
    "eightDiamonds", "nineDiamonds", "tenDiamonds", "jackDiamonds", "queenDiamonds", "kingDiamonds",
    "aceSpades", "twoSpades", "threeSpades", "fourSpades", "fiveSpades", "sixSpades", "sevenSpades",
    "eightSpades", "nineSpades", "tenSpades", "jackSpades", "queenSpades", "kingSpades"
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
var i = 28;

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
    for (var i = 0; i < 28; i++) {
        if (i === 0) {
            stackOne.push(cardDeck[i]);
            var newDiv = $("<div class=card>");
            newDiv.addClass("deckOne");
            newDiv.append(cardDeck[i]);
            newDiv.attr("data-card", cardDeck[i]);
            if (cardDeck[i].includes("Diamonds")) {
                newDiv.attr("data-suit", "diamonds");
                newDiv.attr("data-color", "red");
            } else if (cardDeck[i].includes("Hearts")) {
                newDiv.attr("data-suit", "hearts");
                newDiv.attr("data-color", "red");
            } else if (cardDeck[i].includes("Clubs")) {
                newDiv.attr("data-suit", "clubs");
                newDiv.attr("data-color", "black");
            } else if (cardDeck[i].includes("Spades")) {
                newDiv.attr("data-suit", "spades");
                newDiv.attr("data-color", "black");
            }
            if (cardDeck[i].includes("ace")) {
                newDiv.attr("data-num", 1);
            } else if (cardDeck[i].includes("two")) {
                newDiv.attr("data-num", 2);
            } else if (cardDeck[i].includes("three")) {
                newDiv.attr("data-num", 3);
            } else if (cardDeck[i].includes("four")) {
                newDiv.attr("data-num", 4);
            } else if (cardDeck[i].includes("five")) {
                newDiv.attr("data-num", 5);
            } else if (cardDeck[i].includes("six")) {
                newDiv.attr("data-num", 6);
            } else if (cardDeck[i].includes("seven")) {
                newDiv.attr("data-num", 7);
            } else if (cardDeck[i].includes("eight")) {
                newDiv.attr("data-num", 8);
            } else if (cardDeck[i].includes("nine")) {
                newDiv.attr("data-num", 9);
            } else if (cardDeck[i].includes("ten")) {
                newDiv.attr("data-num", 10);
            } else if (cardDeck[i].includes("jack")) {
                newDiv.attr("data-num", 11);
            } else if (cardDeck[i].includes("queen")) {
                newDiv.attr("data-num", 12);
            } else if (cardDeck[i].includes("king")) {
                newDiv.attr("data-num", 13);
            }
            $("#stackOne").append(newDiv);
        } else if (i === 1 || i === 7) {
            stackTwo.push(cardDeck[i]);
            var newDiv = $("<div class=card>");
            newDiv.addClass("deckTwo");
            newDiv.append(cardDeck[i]);
            newDiv.attr("data-card", cardDeck[i]);
            if (cardDeck[i].includes("Diamonds")) {
                newDiv.attr("data-suit", "diamonds");
                newDiv.attr("data-color", "red");
            } else if (cardDeck[i].includes("Hearts")) {
                newDiv.attr("data-suit", "hearts");
                newDiv.attr("data-color", "red");
            } else if (cardDeck[i].includes("Clubs")) {
                newDiv.attr("data-suit", "clubs");
                newDiv.attr("data-color", "black");
            } else if (cardDeck[i].includes("Spades")) {
                newDiv.attr("data-suit", "spades");
                newDiv.attr("data-color", "black");
            }
            if (cardDeck[i].includes("ace")) {
                newDiv.attr("data-num", 1);
            } else if (cardDeck[i].includes("two")) {
                newDiv.attr("data-num", 2);
            } else if (cardDeck[i].includes("three")) {
                newDiv.attr("data-num", 3);
            } else if (cardDeck[i].includes("four")) {
                newDiv.attr("data-num", 4);
            } else if (cardDeck[i].includes("five")) {
                newDiv.attr("data-num", 5);
            } else if (cardDeck[i].includes("six")) {
                newDiv.attr("data-num", 6);
            } else if (cardDeck[i].includes("seven")) {
                newDiv.attr("data-num", 7);
            } else if (cardDeck[i].includes("eight")) {
                newDiv.attr("data-num", 8);
            } else if (cardDeck[i].includes("nine")) {
                newDiv.attr("data-num", 9);
            } else if (cardDeck[i].includes("ten")) {
                newDiv.attr("data-num", 10);
            } else if (cardDeck[i].includes("jack")) {
                newDiv.attr("data-num", 11);
            } else if (cardDeck[i].includes("queen")) {
                newDiv.attr("data-num", 12);
            } else if (cardDeck[i].includes("king")) {
                newDiv.attr("data-num", 13);
            }
            $("#stackTwo").append(newDiv);
        } else if (i === 2 || i === 8 || i === 13) {
            stackThree.push(cardDeck[i]);
            var newDiv = $("<div class=card>");
            newDiv.addClass("deckThree");
            newDiv.append(cardDeck[i]);
            newDiv.attr("data-card", cardDeck[i]);
            if (cardDeck[i].includes("Diamonds")) {
                newDiv.attr("data-suit", "diamonds");
                newDiv.attr("data-color", "red");
            } else if (cardDeck[i].includes("Hearts")) {
                newDiv.attr("data-suit", "hearts");
                newDiv.attr("data-color", "red");
            } else if (cardDeck[i].includes("Clubs")) {
                newDiv.attr("data-suit", "clubs");
                newDiv.attr("data-color", "black");
            } else if (cardDeck[i].includes("Spades")) {
                newDiv.attr("data-suit", "spades");
                newDiv.attr("data-color", "black");
            }
            if (cardDeck[i].includes("ace")) {
                newDiv.attr("data-num", 1);
            } else if (cardDeck[i].includes("two")) {
                newDiv.attr("data-num", 2);
            } else if (cardDeck[i].includes("three")) {
                newDiv.attr("data-num", 3);
            } else if (cardDeck[i].includes("four")) {
                newDiv.attr("data-num", 4);
            } else if (cardDeck[i].includes("five")) {
                newDiv.attr("data-num", 5);
            } else if (cardDeck[i].includes("six")) {
                newDiv.attr("data-num", 6);
            } else if (cardDeck[i].includes("seven")) {
                newDiv.attr("data-num", 7);
            } else if (cardDeck[i].includes("eight")) {
                newDiv.attr("data-num", 8);
            } else if (cardDeck[i].includes("nine")) {
                newDiv.attr("data-num", 9);
            } else if (cardDeck[i].includes("ten")) {
                newDiv.attr("data-num", 10);
            } else if (cardDeck[i].includes("jack")) {
                newDiv.attr("data-num", 11);
            } else if (cardDeck[i].includes("queen")) {
                newDiv.attr("data-num", 12);
            } else if (cardDeck[i].includes("king")) {
                newDiv.attr("data-num", 13);
            }
            $("#stackThree").append(newDiv);
        } else if (i === 3 || i === 9 || i === 14 || i === 18) {
            stackFour.push(cardDeck[i]);
            var newDiv = $("<div class=card>");
            newDiv.addClass("deckFour");
            newDiv.append(cardDeck[i]);
            newDiv.attr("data-card", cardDeck[i]);
            if (cardDeck[i].includes("Diamonds")) {
                newDiv.attr("data-suit", "diamonds");
                newDiv.attr("data-color", "red");
            } else if (cardDeck[i].includes("Hearts")) {
                newDiv.attr("data-suit", "hearts");
                newDiv.attr("data-color", "red");
            } else if (cardDeck[i].includes("Clubs")) {
                newDiv.attr("data-suit", "clubs");
                newDiv.attr("data-color", "black");
            } else if (cardDeck[i].includes("Spades")) {
                newDiv.attr("data-suit", "spades");
                newDiv.attr("data-color", "black");
            }
            if (cardDeck[i].includes("ace")) {
                newDiv.attr("data-num", 1);
            } else if (cardDeck[i].includes("two")) {
                newDiv.attr("data-num", 2);
            } else if (cardDeck[i].includes("three")) {
                newDiv.attr("data-num", 3);
            } else if (cardDeck[i].includes("four")) {
                newDiv.attr("data-num", 4);
            } else if (cardDeck[i].includes("five")) {
                newDiv.attr("data-num", 5);
            } else if (cardDeck[i].includes("six")) {
                newDiv.attr("data-num", 6);
            } else if (cardDeck[i].includes("seven")) {
                newDiv.attr("data-num", 7);
            } else if (cardDeck[i].includes("eight")) {
                newDiv.attr("data-num", 8);
            } else if (cardDeck[i].includes("nine")) {
                newDiv.attr("data-num", 9);
            } else if (cardDeck[i].includes("ten")) {
                newDiv.attr("data-num", 10);
            } else if (cardDeck[i].includes("jack")) {
                newDiv.attr("data-num", 11);
            } else if (cardDeck[i].includes("queen")) {
                newDiv.attr("data-num", 12);
            } else if (cardDeck[i].includes("king")) {
                newDiv.attr("data-num", 13);
            }
            $("#stackFour").append(newDiv);
        } else if (i === 4 || i === 10 || i === 15 || i === 19 || i === 22) {
            stackFive.push(cardDeck[i]);
            var newDiv = $("<div class=card>");
            newDiv.addClass("deckFive");
            newDiv.append(cardDeck[i]);
            newDiv.attr("data-card", cardDeck[i]);
            if (cardDeck[i].includes("Diamonds")) {
                newDiv.attr("data-suit", "diamonds");
                newDiv.attr("data-color", "red");
            } else if (cardDeck[i].includes("Hearts")) {
                newDiv.attr("data-suit", "hearts");
                newDiv.attr("data-color", "red");
            } else if (cardDeck[i].includes("Clubs")) {
                newDiv.attr("data-suit", "clubs");
                newDiv.attr("data-color", "black");
            } else if (cardDeck[i].includes("Spades")) {
                newDiv.attr("data-suit", "spades");
                newDiv.attr("data-color", "black");
            }
            if (cardDeck[i].includes("ace")) {
                newDiv.attr("data-num", 1);
            } else if (cardDeck[i].includes("two")) {
                newDiv.attr("data-num", 2);
            } else if (cardDeck[i].includes("three")) {
                newDiv.attr("data-num", 3);
            } else if (cardDeck[i].includes("four")) {
                newDiv.attr("data-num", 4);
            } else if (cardDeck[i].includes("five")) {
                newDiv.attr("data-num", 5);
            } else if (cardDeck[i].includes("six")) {
                newDiv.attr("data-num", 6);
            } else if (cardDeck[i].includes("seven")) {
                newDiv.attr("data-num", 7);
            } else if (cardDeck[i].includes("eight")) {
                newDiv.attr("data-num", 8);
            } else if (cardDeck[i].includes("nine")) {
                newDiv.attr("data-num", 9);
            } else if (cardDeck[i].includes("ten")) {
                newDiv.attr("data-num", 10);
            } else if (cardDeck[i].includes("jack")) {
                newDiv.attr("data-num", 11);
            } else if (cardDeck[i].includes("queen")) {
                newDiv.attr("data-num", 12);
            } else if (cardDeck[i].includes("king")) {
                newDiv.attr("data-num", 13);
            }
            $("#stackFive").append(newDiv);
        } else if (i === 5 || i === 11 || i === 16 || i === 20 || i === 23 || i === 25) {
            stackSix.push(cardDeck[i]);
            var newDiv = $("<div class=card>");
            newDiv.addClass("deckSix");
            newDiv.append(cardDeck[i]);
            newDiv.attr("data-card", cardDeck[i]);
            if (cardDeck[i].includes("Diamonds")) {
                newDiv.attr("data-suit", "diamonds");
                newDiv.attr("data-color", "red");
            } else if (cardDeck[i].includes("Hearts")) {
                newDiv.attr("data-suit", "hearts");
                newDiv.attr("data-color", "red");
            } else if (cardDeck[i].includes("Clubs")) {
                newDiv.attr("data-suit", "clubs");
                newDiv.attr("data-color", "black");
            } else if (cardDeck[i].includes("Spades")) {
                newDiv.attr("data-suit", "spades");
                newDiv.attr("data-color", "black");
            }
            if (cardDeck[i].includes("ace")) {
                newDiv.attr("data-num", 1);
            } else if (cardDeck[i].includes("two")) {
                newDiv.attr("data-num", 2);
            } else if (cardDeck[i].includes("three")) {
                newDiv.attr("data-num", 3);
            } else if (cardDeck[i].includes("four")) {
                newDiv.attr("data-num", 4);
            } else if (cardDeck[i].includes("five")) {
                newDiv.attr("data-num", 5);
            } else if (cardDeck[i].includes("six")) {
                newDiv.attr("data-num", 6);
            } else if (cardDeck[i].includes("seven")) {
                newDiv.attr("data-num", 7);
            } else if (cardDeck[i].includes("eight")) {
                newDiv.attr("data-num", 8);
            } else if (cardDeck[i].includes("nine")) {
                newDiv.attr("data-num", 9);
            } else if (cardDeck[i].includes("ten")) {
                newDiv.attr("data-num", 10);
            } else if (cardDeck[i].includes("jack")) {
                newDiv.attr("data-num", 11);
            } else if (cardDeck[i].includes("queen")) {
                newDiv.attr("data-num", 12);
            } else if (cardDeck[i].includes("king")) {
                newDiv.attr("data-num", 13);
            }
            $("#stackSix").append(newDiv);
        } else if (i === 6 || i === 12 || i === 17 || i === 21 || i === 24 || i === 26 || i === 27) {
            stackSeven.push(cardDeck[i]);
            var newDiv = $("<div class=card>");
            newDiv.addClass("deckSeven");
            newDiv.append(cardDeck[i]);
            newDiv.attr("data-card", cardDeck[i]);
            if (cardDeck[i].includes("Diamonds")) {
                newDiv.attr("data-suit", "diamonds");
                newDiv.attr("data-color", "red");
            } else if (cardDeck[i].includes("Hearts")) {
                newDiv.attr("data-suit", "hearts");
                newDiv.attr("data-color", "red");
            } else if (cardDeck[i].includes("Clubs")) {
                newDiv.attr("data-suit", "clubs");
                newDiv.attr("data-color", "black");
            } else if (cardDeck[i].includes("Spades")) {
                newDiv.attr("data-suit", "spades");
                newDiv.attr("data-color", "black");
            }
            if (cardDeck[i].includes("ace")) {
                newDiv.attr("data-num", 1);
            } else if (cardDeck[i].includes("two")) {
                newDiv.attr("data-num", 2);
            } else if (cardDeck[i].includes("three")) {
                newDiv.attr("data-num", 3);
            } else if (cardDeck[i].includes("four")) {
                newDiv.attr("data-num", 4);
            } else if (cardDeck[i].includes("five")) {
                newDiv.attr("data-num", 5);
            } else if (cardDeck[i].includes("six")) {
                newDiv.attr("data-num", 6);
            } else if (cardDeck[i].includes("seven")) {
                newDiv.attr("data-num", 7);
            } else if (cardDeck[i].includes("eight")) {
                newDiv.attr("data-num", 8);
            } else if (cardDeck[i].includes("nine")) {
                newDiv.attr("data-num", 9);
            } else if (cardDeck[i].includes("ten")) {
                newDiv.attr("data-num", 10);
            } else if (cardDeck[i].includes("jack")) {
                newDiv.attr("data-num", 11);
            } else if (cardDeck[i].includes("queen")) {
                newDiv.attr("data-num", 12);
            } else if (cardDeck[i].includes("king")) {
                newDiv.attr("data-num", 13);
            }
            $("#stackSeven").append(newDiv);
        }
    } // Closes tableu deal

    for (var i = 28; i < 52; i++) {
        remainingCards.push(cardDeck[i]);
        var newDiv = $("<div class=card>");
        newDiv.addClass("remainingDeck");
        newDiv.addClass("remainingCards"+i);
            newDiv.append(cardDeck[i]);
            newDiv.attr("data-card", cardDeck[i]);
            if (cardDeck[i].includes("Diamonds")) {
                newDiv.attr("data-suit", "diamonds");
                newDiv.attr("data-color", "red");
            } else if (cardDeck[i].includes("Hearts")) {
                newDiv.attr("data-suit", "hearts");
                newDiv.attr("data-color", "red");
            } else if (cardDeck[i].includes("Clubs")) {
                newDiv.attr("data-suit", "clubs");
                newDiv.attr("data-color", "black");
            } else if (cardDeck[i].includes("Spades")) {
                newDiv.attr("data-suit", "spades");
                newDiv.attr("data-color", "black");
            }
            if (cardDeck[i].includes("ace")) {
                newDiv.attr("data-num", 1);
            } else if (cardDeck[i].includes("two")) {
                newDiv.attr("data-num", 2);
            } else if (cardDeck[i].includes("three")) {
                newDiv.attr("data-num", 3);
            } else if (cardDeck[i].includes("four")) {
                newDiv.attr("data-num", 4);
            } else if (cardDeck[i].includes("five")) {
                newDiv.attr("data-num", 5);
            } else if (cardDeck[i].includes("six")) {
                newDiv.attr("data-num", 6);
            } else if (cardDeck[i].includes("seven")) {
                newDiv.attr("data-num", 7);
            } else if (cardDeck[i].includes("eight")) {
                newDiv.attr("data-num", 8);
            } else if (cardDeck[i].includes("nine")) {
                newDiv.attr("data-num", 9);
            } else if (cardDeck[i].includes("ten")) {
                newDiv.attr("data-num", 10);
            } else if (cardDeck[i].includes("jack")) {
                newDiv.attr("data-num", 11);
            } else if (cardDeck[i].includes("queen")) {
                newDiv.attr("data-num", 12);
            } else if (cardDeck[i].includes("king")) {
                newDiv.attr("data-num", 13);
            }
        $("#deckRemainder").append(newDiv);
    }
    console.log(stackOne); console.log(stackTwo); console.log(stackThree); console.log(stackFour); console.log(stackFive); console.log(stackSix); console.log(stackSeven); console.log(remainingCards);
} // closes deal function

function hideDeckRemainder() {
    for (i = 29; i < 52; i++) {
        $(".remainingCards"+i).hide();
    }
};

$("#gameStart").on("click", function () {
    $("#gameStart").hide();
    $(".cardStacks").show();
    shuffle();
    deal();
    hideDeckRemainder();
    i = 28;
});


$(document).on("click",".remainingDeck", function () {
    if (i >= 51) {
        i = 28
    };
    console.log("on click");
    console.log("i: " + i);
    $(".remainingCards"+i).hide();
    i++;
    $(".remainingCards"+i).show();
    console.log("i: " + i);
}); 

$("#nextCard").on("click", function () {

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



