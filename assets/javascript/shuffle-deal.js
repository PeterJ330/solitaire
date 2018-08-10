

var controlDeck = [
    "aceHearts", "twoHearts", "threeHearts", "fourHearts", "fiveHearts", "sixHearts", "sevenHearts",
    "eightHearts", "nineHearts", "tenHearts", "jackHearts", "queenHearts", "kingHearts",
    "aceClubs", "twoClubs", "threeClubs", "fourClubs", "fiveClubs", "sixClubs", "sevenClubs",
    "eightClubs", "nineClubs", "tenClubs", "jackClubs", "queenClubs", "kingClubs",
    "aceDiamonds", "twoDiamonds", "threeDiamonds", "fourDiamonds", "fiveDiamonds", "sixDiamonds", "sevenDiamonds",
    "eightDiamonds", "nineDiamonds", "tenDiamonds", "jackDiamonds", "queenDiamonds", "kingDiamonds",
    "aceSpades", "twoSpades", "threeSpades", "fourSpades", "fiveSpades", "sixSpades", "sevenSpades",
    "eightSpades", "nineSpades", "tenSpades", "jackSpades", "queenSpades", "kingSpades"
];
// ========================================================================================================================

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
// ========================================================================================================================
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
// ========================================================================================================================
var imageSource;
var newDiv = $("<div class=card>");
// var image = $("<img id='placeholder' class='cardImage'>");
var picDiv = $("<img class='cardPicture' src=assets/images/Ace_Hearts.png>");
var cardBack = $("<img class='cardPicture' src=assets/images/cardBack.png>");
// $("#displayImage").append(picDiv);
// $("#displayImage").append(cardBack);
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
// ========================================================================================================================

$("#gameStart").on("click", function () {
    $("#gameStart").hide();
    $(".cardStacks").show();
    // addImage();
    shuffle();
    deal();
    hideDeckRemainder();
});
// ========================================================================================================================

function deal() {
    for (var i = 0; i < 28; i++) {
        if (i === 0) {
            stackOne.push(cardDeck[i]);
            newDiv = $("<div class=card>");
            newDiv.addClass("deckOne");
            newDiv.append(cardDeck[i]);
            newDiv.attr("data-card", cardDeck[i]);
            if (cardDeck[i].includes("Hearts")) {
                newDiv.attr("data-suit", "hearts");
                newDiv.attr("data-color", "red");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.hearts.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.hearts.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.hearts.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.hearts.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.hearts.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.hearts.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.hearts.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.hearts.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.hearts.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.hearts.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.hearts.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.hearts.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.hearts.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes hearts conditional
            else if (cardDeck[i].includes("Clubs")) {
                newDiv.attr("data-suit", "clubs");
                newDiv.attr("data-color", "black");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.clubs.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.clubs.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.clubs.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.clubs.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.clubs.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.clubs.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.clubs.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.clubs.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.clubs.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.clubs.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.clubs.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.clubs.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.clubs.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes clubs conditional
            else if (cardDeck[i].includes("Diamonds")) {
                newDiv.attr("data-suit", "diamonds");
                newDiv.attr("data-color", "red");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.diamonds.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.diamonds.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.diamonds.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.diamonds.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.diamonds.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.diamonds.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.diamonds.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.diamonds.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.diamonds.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.diamonds.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.diamonds.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.diamonds.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.diamonds.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes diamonds conditional
            else if (cardDeck[i].includes("Spades")) {
                newDiv.attr("data-suit", "spades");
                newDiv.attr("data-color", "black");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.spades.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.spades.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.spades.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.spades.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.spades.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.spades.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.spades.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.spades.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.spades.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.spades.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.spades.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.spades.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.spades.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes spades conditional

            $("#stackOne").append(newDiv);
// STACK ONE COMPLETE ============================================================================================================  
        } else if (i === 1 || i === 7) {
            stackTwo.push(cardDeck[i]);
            newDiv = $("<div class=card>");
            newDiv.addClass("deckTwo");
            newDiv.append(cardDeck[i]);
            newDiv.attr("data-card", cardDeck[i]);

            if (cardDeck[i].includes("Hearts")) {
                newDiv.attr("data-suit", "hearts");
                newDiv.attr("data-color", "red");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.hearts.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.hearts.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.hearts.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.hearts.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.hearts.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.hearts.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.hearts.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.hearts.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.hearts.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.hearts.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.hearts.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.hearts.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.hearts.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes hearts conditional
            else if (cardDeck[i].includes("Clubs")) {
                newDiv.attr("data-suit", "clubs");
                newDiv.attr("data-color", "black");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.clubs.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.clubs.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.clubs.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.clubs.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.clubs.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.clubs.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.clubs.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.clubs.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.clubs.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.clubs.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.clubs.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.clubs.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.clubs.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes clubs conditional
            else if (cardDeck[i].includes("Diamonds")) {
                newDiv.attr("data-suit", "diamonds");
                newDiv.attr("data-color", "red");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.diamonds.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.diamonds.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.diamonds.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.diamonds.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.diamonds.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.diamonds.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.diamonds.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.diamonds.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.diamonds.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.diamonds.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.diamonds.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.diamonds.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.diamonds.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes diamonds conditional
            else if (cardDeck[i].includes("Spades")) {
                newDiv.attr("data-suit", "spades");
                newDiv.attr("data-color", "black");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.spades.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.spades.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.spades.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.spades.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.spades.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.spades.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.spades.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.spades.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.spades.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.spades.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.spades.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.spades.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.spades.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes spades conditional
            
            $("#stackTwo").append(newDiv);
// STACK TWO COMPLETE ============================================================================================================            
        } else if (i === 2 || i === 8 || i === 13) {
            stackThree.push(cardDeck[i]);
            newDiv = $("<div class=card>");
            newDiv.addClass("deckThree");
            newDiv.append(cardDeck[i]);
            newDiv.attr("data-card", cardDeck[i]);

            if (cardDeck[i].includes("Hearts")) {
                newDiv.attr("data-suit", "hearts");
                newDiv.attr("data-color", "red");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.hearts.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.hearts.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.hearts.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.hearts.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.hearts.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.hearts.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.hearts.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.hearts.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.hearts.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.hearts.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.hearts.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.hearts.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.hearts.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes hearts conditional
            else if (cardDeck[i].includes("Clubs")) {
                newDiv.attr("data-suit", "clubs");
                newDiv.attr("data-color", "black");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.clubs.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.clubs.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.clubs.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.clubs.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.clubs.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.clubs.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.clubs.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.clubs.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.clubs.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.clubs.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.clubs.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.clubs.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.clubs.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes clubs conditional
            else if (cardDeck[i].includes("Diamonds")) {
                newDiv.attr("data-suit", "diamonds");
                newDiv.attr("data-color", "red");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.diamonds.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.diamonds.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.diamonds.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.diamonds.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.diamonds.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.diamonds.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.diamonds.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.diamonds.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.diamonds.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.diamonds.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.diamonds.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.diamonds.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.diamonds.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes diamonds conditional
            else if (cardDeck[i].includes("Spades")) {
                newDiv.attr("data-suit", "spades");
                newDiv.attr("data-color", "black");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.spades.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.spades.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.spades.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.spades.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.spades.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.spades.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.spades.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.spades.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.spades.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.spades.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.spades.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.spades.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.spades.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes spades conditional
            
            $("#stackThree").append(newDiv);
// STACK THREE COMPLETE ============================================================================================================            
        } else if (i === 3 || i === 9 || i === 14 || i === 18) {
            stackFour.push(cardDeck[i]);
            newDiv = $("<div class=card>");
            newDiv.addClass("deckFour");
            newDiv.append(cardDeck[i]);
            newDiv.attr("data-card", cardDeck[i]);

            if (cardDeck[i].includes("Hearts")) {
                newDiv.attr("data-suit", "hearts");
                newDiv.attr("data-color", "red");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.hearts.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.hearts.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.hearts.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.hearts.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.hearts.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.hearts.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.hearts.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.hearts.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.hearts.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.hearts.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.hearts.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.hearts.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.hearts.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes hearts conditional
            else if (cardDeck[i].includes("Clubs")) {
                newDiv.attr("data-suit", "clubs");
                newDiv.attr("data-color", "black");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.clubs.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.clubs.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.clubs.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.clubs.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.clubs.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.clubs.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.clubs.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.clubs.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.clubs.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.clubs.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.clubs.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.clubs.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.clubs.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes clubs conditional
            else if (cardDeck[i].includes("Diamonds")) {
                newDiv.attr("data-suit", "diamonds");
                newDiv.attr("data-color", "red");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.diamonds.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.diamonds.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.diamonds.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.diamonds.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.diamonds.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.diamonds.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.diamonds.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.diamonds.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.diamonds.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.diamonds.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.diamonds.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.diamonds.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.diamonds.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes diamonds conditional
            else if (cardDeck[i].includes("Spades")) {
                newDiv.attr("data-suit", "spades");
                newDiv.attr("data-color", "black");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.spades.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.spades.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.spades.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.spades.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.spades.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.spades.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.spades.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.spades.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.spades.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.spades.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.spades.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.spades.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.spades.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes spades conditional
            
            $("#stackFour").append(newDiv);
// STACK FOUR COMPLETE ============================================================================================================            
        } else if (i === 4 || i === 10 || i === 15 || i === 19 || i === 22) {
            stackFive.push(cardDeck[i]);
            newDiv = $("<div class=card>");
            newDiv.addClass("deckFive");
            newDiv.append(cardDeck[i]);
            newDiv.attr("data-card", cardDeck[i]);

            if (cardDeck[i].includes("Hearts")) {
                newDiv.attr("data-suit", "hearts");
                newDiv.attr("data-color", "red");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.hearts.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.hearts.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.hearts.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.hearts.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.hearts.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.hearts.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.hearts.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.hearts.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.hearts.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.hearts.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.hearts.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.hearts.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.hearts.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes hearts conditional
            else if (cardDeck[i].includes("Clubs")) {
                newDiv.attr("data-suit", "clubs");
                newDiv.attr("data-color", "black");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.clubs.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.clubs.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.clubs.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.clubs.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.clubs.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.clubs.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.clubs.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.clubs.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.clubs.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.clubs.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.clubs.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.clubs.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.clubs.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes clubs conditional
            else if (cardDeck[i].includes("Diamonds")) {
                newDiv.attr("data-suit", "diamonds");
                newDiv.attr("data-color", "red");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.diamonds.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.diamonds.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.diamonds.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.diamonds.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.diamonds.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.diamonds.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.diamonds.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.diamonds.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.diamonds.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.diamonds.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.diamonds.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.diamonds.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.diamonds.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes diamonds conditional
            else if (cardDeck[i].includes("Spades")) {
                newDiv.attr("data-suit", "spades");
                newDiv.attr("data-color", "black");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.spades.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.spades.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.spades.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.spades.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.spades.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.spades.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.spades.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.spades.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.spades.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.spades.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.spades.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.spades.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.spades.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes spades conditional
            
            $("#stackFive").append(newDiv);
// STACK FIVE COMPLETE ============================================================================================================                        
        } else if (i === 5 || i === 11 || i === 16 || i === 20 || i === 23 || i === 25) {
            stackSix.push(cardDeck[i]);
            newDiv = $("<div class=card>");
            newDiv.addClass("deckSix");
            newDiv.append(cardDeck[i]);
            newDiv.attr("data-card", cardDeck[i]);

            if (cardDeck[i].includes("Hearts")) {
                newDiv.attr("data-suit", "hearts");
                newDiv.attr("data-color", "red");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.hearts.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.hearts.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.hearts.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.hearts.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.hearts.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.hearts.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.hearts.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.hearts.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.hearts.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.hearts.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.hearts.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.hearts.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.hearts.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes hearts conditional
            else if (cardDeck[i].includes("Clubs")) {
                newDiv.attr("data-suit", "clubs");
                newDiv.attr("data-color", "black");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.clubs.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.clubs.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.clubs.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.clubs.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.clubs.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.clubs.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.clubs.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.clubs.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.clubs.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.clubs.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.clubs.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.clubs.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.clubs.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes clubs conditional
            else if (cardDeck[i].includes("Diamonds")) {
                newDiv.attr("data-suit", "diamonds");
                newDiv.attr("data-color", "red");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.diamonds.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.diamonds.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.diamonds.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.diamonds.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.diamonds.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.diamonds.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.diamonds.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.diamonds.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.diamonds.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.diamonds.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.diamonds.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.diamonds.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.diamonds.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes diamonds conditional
            else if (cardDeck[i].includes("Spades")) {
                newDiv.attr("data-suit", "spades");
                newDiv.attr("data-color", "black");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.spades.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.spades.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.spades.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.spades.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.spades.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.spades.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.spades.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.spades.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.spades.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.spades.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.spades.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.spades.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.spades.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes spades conditional
            

            $("#stackSix").append(newDiv);
// STACK SIX COMPLETE ============================================================================================================                        
        } else if (i === 6 || i === 12 || i === 17 || i === 21 || i === 24 || i === 26 || i === 27) {
            stackSeven.push(cardDeck[i]);
            newDiv = $("<div class=card>");
            newDiv.addClass("deckSeven");
            newDiv.append(cardDeck[i]);
            newDiv.attr("data-card", cardDeck[i]);

            if (cardDeck[i].includes("Hearts")) {
                newDiv.attr("data-suit", "hearts");
                newDiv.attr("data-color", "red");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.hearts.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.hearts.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.hearts.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.hearts.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.hearts.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.hearts.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.hearts.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.hearts.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.hearts.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.hearts.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.hearts.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.hearts.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.hearts.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes hearts conditional
            else if (cardDeck[i].includes("Clubs")) {
                newDiv.attr("data-suit", "clubs");
                newDiv.attr("data-color", "black");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.clubs.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.clubs.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.clubs.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.clubs.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.clubs.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.clubs.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.clubs.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.clubs.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.clubs.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.clubs.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.clubs.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.clubs.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.clubs.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes clubs conditional
            else if (cardDeck[i].includes("Diamonds")) {
                newDiv.attr("data-suit", "diamonds");
                newDiv.attr("data-color", "red");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.diamonds.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.diamonds.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.diamonds.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.diamonds.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.diamonds.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.diamonds.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.diamonds.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.diamonds.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.diamonds.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.diamonds.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.diamonds.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.diamonds.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.diamonds.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes diamonds conditional
            else if (cardDeck[i].includes("Spades")) {
                newDiv.attr("data-suit", "spades");
                newDiv.attr("data-color", "black");
                if (cardDeck[i].includes("ace")) {
                    newDiv.attr("data-num", 1);
                    imageSource = cardProperties.spades.image[0];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("two")) {
                    newDiv.attr("data-num", 2);
                    imageSource = cardProperties.spades.image[1];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("three")) {
                    newDiv.attr("data-num", 3);
                    imageSource = cardProperties.spades.image[2];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("four")) {
                    newDiv.attr("data-num", 4);
                    imageSource = cardProperties.spades.image[3];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("five")) {
                    newDiv.attr("data-num", 5);
                    imageSource = cardProperties.spades.image[4];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("six")) {
                    newDiv.attr("data-num", 6);
                    imageSource = cardProperties.spades.image[5];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("seven")) {
                    newDiv.attr("data-num", 7);
                    imageSource = cardProperties.spades.image[6];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("eight")) {
                    newDiv.attr("data-num", 8);
                    imageSource = cardProperties.spades.image[7];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("nine")) {
                    newDiv.attr("data-num", 9);
                    imageSource = cardProperties.spades.image[8];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("ten")) {
                    newDiv.attr("data-num", 10);
                    imageSource = cardProperties.spades.image[9];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("jack")) {
                    newDiv.attr("data-num", 11);
                    imageSource = cardProperties.spades.image[10];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("queen")) {
                    newDiv.attr("data-num", 12);
                    imageSource = cardProperties.spades.image[11];
                    newDiv.attr("src", imageSource);
                } else if (cardDeck[i].includes("king")) {
                    newDiv.attr("data-num", 13);
                    imageSource = cardProperties.spades.image[12];
                    newDiv.attr("src", imageSource);
                }
            } // Closes spades conditional

            $("#stackSeven").append(newDiv);
        }
    } // Closes tableu deal
// ========================================================================================================================

    for (var i = 28; i < 52; i++) {
        remainingCards.push(cardDeck[i]);
        newDiv = $("<div class=card>");
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
// ========================================================================================================================

function hideDeckRemainder() {
    var i = 28;
    for (i = 29; i < 52; i++) {
        $(".remainingCards"+i).hide();
    }
};
// ========================================================================================================================

$(document).on("click",".remainingDeck", function () {
    reset();
    console.log("on click");
    console.log("i: " + i);
    $(".remainingCards"+i).hide();
    i++;
    $(".remainingCards"+i).show();
    console.log("i: " + i);

}); 
// ========================================================================================================================

function reset(){
    if (i >= 51) {
        i = 27
        $(".remainingCards"+51).hide();
    };
}
// ========================================================================================================================

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