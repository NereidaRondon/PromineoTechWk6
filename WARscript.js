// For the final project you will be creating an automated version of the classic card game WAR. The entire game should play out instantly without any user input. 
// Think about how you would build this project and write your plan down. Consider classes such as Card, Deck, and Player and what fields and methods they might each have. You can implement the game however you’d like (i.e. printing to the console, using alert, or some other way). The completed project should, when ran, do the following:
// -Deal 26 Cards to two Players from a Deck. ✔️
// -Iterate through the turns where each Player plays a Card ✔️
// -The Player who played the higher card is awarded a point ✔️
// -Ties result in zero points for either Player ✔️
// -After all cards have been played, display the score. ✔️
// -Write a Unit Test using Mocha and Chai for at least one of the functions you write.

let J='J';
let Q='Q';
let K='K';
let A='A';

let fullDeck = ['2','3','4','5','6','7','8','9','10',J,Q,K,A,'2','3','4','5','6','7','8','9','10',J,Q,K,A,'2','3','4','5','6','7','8','9','10',J,Q,K,A,'2','3','4','5','6','7','8','9','10',J,Q,K,A];

//let fullDeck = ['2','3','4','5','6','7','8','9','10','J','Q','K','A','2','3','4','5','6','7','8','9','10','J','Q','K','A','2','3','4','5','6','7','8','9','10','J','Q','K','A','2','3','4','5','6','7','8','9','10','J','Q','K','A'];

//let fullDeck = [2,3,4,5,6,7,8,9,10,J,Q,K,A,2,3,4,5,6,7,8,9,10,J,Q,K,A,2,3,4,5,6,7,8,9,10,J,Q,K,A,2,3,4,5,6,7,8,9,10,J,Q,K,A];

class Cards{
    constructor(value){
        this.value = value;

    }
}

class Deck{
    constructor(cards){
        this.cards =cards;
    }
    
    start(){
        alert("🧨Let's go to War🧨!"); 
    }
    //shuffledDeck(){
    fullDeck.sort(function(){
         return 0.5 - Math.random()
    });
    
    let shuffledDeck = fullDeck.sort(()=> 0.5 - Math.random());
       
}



let playerOneCard = [];
let scoreP1 = 0;

let playerTwoCard = [];
let scoreP2 = 0;


// playerOneCard= shuffledDeck.slice(0,25);
// playerTwoCard= shuffledDeck.slice(26, -1)
// alert(`PLAYER 1: ${playerOneCard}`);
// alert(`PLAYER 2: ${playerTwoCard}`);

for(let i = 0; i < 52; i++){
    if(i%2 ===0){
        playerOneCard.push(shuffledDeck[i]);
    }else{
        playerTwoCard.push(shuffledDeck[i]);
    }
};

//All of the cards for each player
alert(`
PLAYER 1 🥇     ${playerOneCard}

PLAYER 2 🥈     ${playerTwoCard}
`);

//function compares the card values
function takeTurns(p1, p2){
    J = '11';
    Q = '12';
    K = '13';
    A = '14';
    if(p1 > p2){
    scoreP1 += 1;
    }else if (p1 < p2) {
    scoreP2 += 1;
    }else {
        alert('Tied! No points awarded...');
    }
}  

//each players card per turn
for(let i = 0; i<3;i++){
    alert (`
    PLAYER 1 Card ♠️♦️♣️♥️:     ${playerOneCard[i]}           
    
    PLAYER 2 Card ♠️♦️♣️♥️:     ${playerTwoCard[i]}
    `);
    
    takeTurns(playerOneCard[i], playerTwoCard[i]);  
    //At the end of the game, alert scores
    
};



alert(`
PLAYER 1 Score🎲:     ${scoreP1}

PLAYER 2 Score🎲:     ${scoreP2}
`);





class Players(){
    constructor(player){
        this.player = player;
    }
}



let deck = new Deck();
deck.start();

























// function doSomething(x, y) {
//   if (typeof x != "string") {
//     throw new Error("x must be a string");
//   }
//   return x + y;
// }
