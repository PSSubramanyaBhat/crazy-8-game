"use strict";

class Deck {
    constructor() {
        this.cards = new Array(52);

    }

    randomCardPosition(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    shuffle() {
        let count = 0;
        for (let i = 0; i < this.cards.length; i++) {
            let j = i + 1;
            // let j = i;
            // this.cards[i] = i+1;
            this.cards[0] = "Club-" + 1;
            if ((i + 1) % 13 === 0) {
                count++;
            }
            if (count === 0) {
                this.cards[i + 1] = "Club-" + (j + 1);

            }
            if (count === 1) {
                j = j - 13;
                this.cards[i + 1] = "Diamond-" + (j + 1);

            }
            if (count === 2) {
                j = j - 26;
                this.cards[i + 1] = "Heart-" + (j + 1);

            }
            if (count === 3) {
                j = j - 39;
                this.cards[i + 1] = "Spades-" + (j + 1);

            }
        }
        // console.log("Deck Before Shuffeling");


        this.cards[0] = "Club-Ace";
        this.cards[13] = "Diamond-Ace";
        this.cards[26] = "Heart-Ace";
        this.cards[39] = "Spades-Ace";

        this.cards[10] = "Club-Jack";
        this.cards[23] = "Diamond-Jack";
        this.cards[36] = "Heart-Jack";
        this.cards[49] = "Spades-Jack";

        this.cards[11] = "Club-Queen";
        this.cards[24] = "Diamond-Queen";
        this.cards[37] = "Heart-Queen";
        this.cards[50] = "Spades-Queen";

        this.cards[12] = "Club-King";
        this.cards[25] = "Diamond-King";
        this.cards[38] = "Heart-King";
        this.cards[51] = "Spades-King";

        // console.log(this.cards);

        for (let i = 0; i < this.cards.length; i++) {
            let randomCardValue = this.randomCardPosition(0, this.cards.length);
            let temp = this.cards[i];
            this.cards[i] = this.cards[randomCardValue];
            this.cards[randomCardValue] = temp;
        }
        // console.log("Deck After Shuffeling");
        // console.log(this.cards);

        return this.cards;
    }
}

class Eights {
    constructor() {
        this.one = new Player();
        this.two = new Player();

        this.player = new Player();
        // this.currentPlayer = new Player();

        this.drawPile = new Hand().emptyArray;
        this.discardPile = new Hand().emptyArray;

        let deck = new Deck();
        this.drawPile = deck.shuffle();
        this.countRounds = 0;
        //abcd
    }

    drawFromPile() {
        // console.log("The Draw pile for Crazy Eight:");
        // console.log(this.drawPile);
        if (this.drawPile.isEmpty) {
            console.log("-----DRAW PILE is empty\n-----");
            console.log("-----RESHUFFELLING DISCARD PILE into DRAW PILE-----");

            let topCard = this.discardPile.pop();

            this.drawPile = this.shuffleDiscardedPile(this.discardPile);


            while (this.discardPile.length !== 0) {
                this.discardPile.pop();
            }
            this.discardPile.push(topCard);
        }

        let cardChosen = this.drawPile.pop();

        return cardChosen;
    }

    discardToPile() {
        this.countRounds++;
        let topDiscardedCard = this.discardPile[this.discardPile.length - 1];
        topDiscardedCard = JSON.stringify(topDiscardedCard);
        console.log(typeof(topDiscardedCard));
        let checkCondition = "";
        let flag = 0;

        console.log("THE TOP CARD FOR DRAWING IS:\n" + topDiscardedCard + "\n\n");


        if (topDiscardedCard.includes("Club-")) {
            checkCondition = "Club-";
        }
        if (topDiscardedCard.includes("Diamond-")) {
            checkCondition = "Diamond-";
        }
        if (topDiscardedCard.includes("Heart-")) {
            checkCondition = "Heart-";
        }
        if (topDiscardedCard.includes("Spades-")) {
            checkCondition = "Spades-";
        }

        
        
        

        //IMP PART (Done to prevent string -> obj convertion)
        /*checkCondition = topDiscardedCard.split("-")[0];
        checkCondition = checkCondition+"-";
        console.log("YO     "+checkCondition);*/


        if (flag === 0) {
            if (this.player === this.one) {
                for (let i of this.one.hand) {
                    if (i.includes(checkCondition)) {
                        console.log("*************************THE CHECK CONDITION IS:\n" + checkCondition + "\n\n");
                        // console.log("THE TOP CARD FOR DRAWING IS:                    "+topDiscardedCard);
                        // console.log("THE CHECK CONDITION IS:                    "+checkCondition);
                        flag = 1;
                        let pos = this.one.hand.indexOf(i);
                        let discardedCard = this.one.hand.splice(pos, 1);
                        this.discardPile.push(discardedCard);
                        // break;
                        flag = 0;
                        checkCondition = "";
                        topDiscardedCard = "";
                        return;
                    }
                }
            }

            if (this.player === this.two) {
                for (let i of this.two.hand) {
                    if (i.includes(checkCondition)) {
                        console.log("*************************THE CHECK CONDITION IS:\n" + checkCondition + "\n\n");
                        // console.log("THE TOP CARD FOR DRAWING IS:                    "+topDiscardedCard);
                        // console.log("THE CHECK CONDITION IS:                    "+checkCondition);
                        flag = 1;
                        let pos = this.two.hand.indexOf(i);
                        let discardedCard = this.two.hand.splice(pos, 1);
                        this.discardPile.push(discardedCard);
                        // break;
                        flag = 0;
                        checkCondition = "";
                        topDiscardedCard = "";
                        return;
                    }
                }
            }
        }



        if (topDiscardedCard.includes("-Ace")) {
            checkCondition = "-Ace";
        }
        if (topDiscardedCard.includes("-2")) {
            checkCondition = "-2";
        }
        if (topDiscardedCard.includes("-3")) {
            checkCondition = "-3";
        }
        if (topDiscardedCard.includes("-4")) {
            checkCondition = "-4";
        }
        if (topDiscardedCard.includes("-5")) {
            checkCondition = "-5";
        }
        if (topDiscardedCard.includes("-6")) {
            checkCondition = "-6";
        }
        if (topDiscardedCard.includes("-7")) {
            checkCondition = "-7";
        }
        if (topDiscardedCard.includes("-8")) {
            checkCondition = "-8";
        }
        if (topDiscardedCard.includes("-9")) {
            checkCondition = "-9";
        }
        if (topDiscardedCard.includes("-10")) {
            checkCondition = "-10";
        }
        if (topDiscardedCard.includes("-Jack")) {
            checkCondition = "-Jack";
        }
        if (topDiscardedCard.includes("-Queen")) {
            checkCondition = "-Queen";
        }
        if (topDiscardedCard.includes("-King")) {
            checkCondition = "-King";
        }

        console.log("*************************THE CHECK CONDITION IS:\n"+checkCondition+"\n\n");

        

        //IMP PART (Done to prevent string -> obj convertion)
        /*checkCondition = topDiscardedCard.split("-")[1];
        checkCondition = "-"+checkCondition;
        console.log("YO  2   "+checkCondition);*/

        if (flag === 0) {
            if (this.player === this.one) {
                for (let i of this.one.hand) {
                    if (i.includes(checkCondition)) {
                        console.log("*************************THE CHECK CONDITION IS:\n" + checkCondition + "\n\n");
                        // console.log("THE TOP CARD FOR DRAWING IS:                    "+topDiscardedCard);
                        // console.log("THE CHECK CONDITION IS:                    "+checkCondition);
                        flag = 1;
                        let pos = this.one.hand.indexOf(i);
                        let discardedCard = this.one.hand.splice(pos, 1);
                        this.discardPile.push(discardedCard);
                        // break;
                        flag = 0;
                        checkCondition = "";
                        topDiscardedCard = "";
                        return;
                    }
                }
            }

            if (this.player === this.two) {
                for (let i of this.two.hand) {
                    if (i.includes(checkCondition)) {
                        console.log("*************************THE CHECK CONDITION IS:\n" + checkCondition + "\n\n");
                        // console.log("THE TOP CARD FOR DRAWING IS:                    "+topDiscardedCard);
                        // console.log("THE CHECK CONDITION IS:                    "+checkCondition);
                        flag = 1;
                        let pos = this.two.hand.indexOf(i);
                        let discardedCard = this.two.hand.splice(pos, 1);
                        this.discardPile.push(discardedCard);
                        // break;
                        flag = 0;
                        checkCondition = "";
                        topDiscardedCard = "";
                        return;
                    }
                }
            }


            // for (let i of this.player.hand) {
            //     if (i.includes(checkCondition)) {
            //         flag = 1;
            //         let pos = this.player.hand.indexOf(i);
            //         let discardedCard = this.player.hand.splice(pos,1);
            //         this.discardPile.push(discardedCard);
            //         break;
            //     }
            // }
        }

        if (flag === 0) {
            if (this.player === this.one) {
                for (let i of this.one.hand) {
                    if (i.includes("-8")) {
                        // console.log("THE TOP CARD FOR DRAWING IS:                    "+topDiscardedCard);
                        // console.log("THE CHECK CONDITION IS:                    8");
                        flag = 1;
                        let pos = this.one.hand.indexOf(i);
                        let discardedCard = this.one.hand.splice(pos, 1);
                        this.discardPile.push(discardedCard);
                        // break;
                        flag = 0;
                        checkCondition = "";
                        topDiscardedCard = "";
                        return;
                    }
                }
            }

            if (this.player === this.two) {
                for (let i of this.two.hand) {
                    if (i.includes("-8")) {
                        // console.log("THE TOP CARD FOR DRAWING IS:                    "+topDiscardedCard);
                        // console.log("THE CHECK CONDITION IS:                    8");
                        flag = 1;
                        let pos = this.two.hand.indexOf(i);
                        let discardedCard = this.two.hand.splice(pos, 1);
                        this.discardPile.push(discardedCard);
                        // break;
                        flag = 0;
                        checkCondition = "";
                        topDiscardedCard = "";
                        return;
                    }
                }
            }




            // for (let i of this.player.hand) {
            //     if (i.includes("-8")) {
            //         flag = 1;
            //         let pos = this.player.hand.indexOf(i);
            //         let discardedCard = this.player.hand.splice(pos,1);
            //         this.discardPile.push(discardedCard);
            //         break;
            //     }
            // }
        }

        if (flag === 0) {
            if (this.player === this.one) {
                // console.log("THE TOP CARD FOR DRAWING IS:                    "+topDiscardedCard);
                console.log("No Cards Matching For Player 1-----");
                console.log("-----PLAYER 1 drawing a card from the pile-----");
                this.one.hand.push(this.drawFromPile());
            }
            if (this.player === this.two) {
                // console.log("THE TOP CARD FOR DRAWING IS:                    "+topDiscardedCard);
                console.log("No Cards Matching For Player 2-----");
                console.log("-----PLAYER 2 drawing a card from the pile-----");
                this.two.hand.push(this.drawFromPile());
            }
        }

        // flag = 0;
        // checkCondition = "";


    }

    shuffleDiscardedPile(card) {
        for (let i = 0; i < card.length; i++) {
            let randomDiscardedCard = this.randomCardPosition(0, card.length);
            let tempCard = card[i];
            card[i] = card[randomDiscardedCard];
            card[randomDiscardedCard] = tempCard;
        }
        return card;
    }

    displayState() {
        console.log("The Game State of Player 1: ");
        console.log(this.one.hand);
        console.log("The Game State of Player 2: ");
        console.log(this.two.hand);

        console.log("Top of card of Discard Pile: ");
        console.log(this.discardPile[this.discardPile.length - 1]);
    }

    takeTurn(player) {
        if (player === this.one) {
            console.log("PLAYER ONE's TURN!!!");
        }
        if (player === this.two) {
            console.log("PLAYER TWO's TURN!!!");
        }
        this.discardToPile();
    }



    nextPlayer(player) {
        if (player === this.one) {
            return this.two;
        }
        if (player === this.two) {
            return this.one;
        }
    }

    playGame() {
        for (let i = 0; i < 5; i++) {
            this.one.hand.push(this.drawPile.pop());
            this.two.hand.push(this.drawPile.pop());

        }

        this.discardPile.push(this.drawPile.pop());

        // console.log("PLAYER ONE's TURN!!!");


        //this.displayState(); // Initial 5 cards in the hands if 2 players displayed here


        // Player player = one;
        // this.player = new Player();


        this.player = this.one;


        // keep playing until there's a winner
        while (!this.isDone()) {
            this.displayState();
            this.takeTurn(this.player);
            this.player = this.nextPlayer(this.player);
        }

        // // display the final score
        // this.one.displayScore();
        // this.two.displayScore();
        if (this.player === this.one) {
            console.log("No cards left with PLayer 2\n\n");
            console.log("PLAYER TWO WINSSSSSSSSSSSSSSSSSSSSSSSSS!!!");
        }
        if (this.player === this.two) {
            console.log("No cards left with PLayer 1\n\n");
            console.log("PLAYER ONE WINSSSSSSSSSSSSSSSSSSSSSSSSS!!!");
        }
    }

    isDone() {
        return this.one.hand.length === 0 || this.two.hand.length === 0;
    }
}

class Player {
    constructor() {
        // this.playerName = playerName;
        // this.hand = new Array(52);
        this.hand = new Array();
    }

    // draw() {

    // }

    // discard() {

    // }

    // takeTurn(player) {

    // }

    // nextPLayer(player) {

    // }

    displayScore() {

    }

}


class Hand {
    constructor() {
        // this.emptyArray = new Array(52);
        this.emptyArray = new Array();
    }
}

// function displayState() {

// }

function main() {
    // let deck1 = new Deck();
    // console.log(deck1.shuffle());
    // let handClass = new Hand();
    let crazyEight = new Eights();
    // handClass.drawPile();

    // Eights e = new Eights();

    // crazyEight.drawFromPile();

    crazyEight.playGame();
}

main();