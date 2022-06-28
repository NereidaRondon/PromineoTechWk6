// For the final project you will be creating an automated version of the classic card game WAR. The entire game should play out instantly without any user input. 
// Think about how you would build this project and write your plan down. Consider classes such as Card, Deck, and Player and what fields and methods they might each have. You can implement the game however you’d like (i.e. printing to the console, using alert, or some other way). The completed project should, when ran, do the following:
// -Deal 26 Cards to two Players from a Deck. ✔️
// -Iterate through the turns where each Player plays a Card ✔️
// -The Player who played the higher card is awarded a point ✔️
// -Ties result in zero points for either Player ✔️
// -After all cards have been played, display the score. ✔️
// -Write a Unit Test using Mocha and Chai for at least one of the functions you write.

let fullDeck = ['2','3','4','5','6','7','8','9','10', 'J', 'Q', 'K', 'A','2','3','4','5','6','7','8','9','10','J', 'Q', 'K', 'A','2','3','4','5','6','7','8','9','10','J', 'Q', 'K', 'A','2','3','4','5','6','7','8','9','10','J', 'Q', 'K', 'A'];

// class Cards{
//     constructor(value){
//         this.value = value;

//     }
// }

// class Deck{
//     constructor(cards){
//         this.cards =cards;
//     }
    
//     start(){
//         alert("🧨Let's go to War🧨!"); 
//     }
//     //shuffledDeck(){
//     fullDeck.sort(function(){
//          return 0.5 - Math.random()
//     });
    
//     let shuffledDeck = fullDeck.sort(()=> 0.5 - Math.random());
       
// }

let playerOneCard = [];
let scoreP1 = 0;

let playerTwoCard = [];
let scoreP2 = 0;
  
let shuffledDeck = fullDeck.sort(()=> 0.5 - Math.random());


for(let i = 0; i < 52; i++){
    if(i%2 ===0){
        playerOneCard.push(shuffledDeck[i]);
    }else{
        playerTwoCard.push(shuffledDeck[i]);
    }
};

console.log(`
PLAYER 1 🥇   ${playerOneCard}

PLAYER 2 🥈   ${playerTwoCard}
`);




for(let i = 0; i<26;i++){
  console.log 
 (`
 PLAYER 1 Card ♠️ ♦️ ♣️ ♥️:    ${playerOneCard[i]}           
 PLAYER 2 Card ♠️ ♦️ ♣️ ♥️:    ${playerTwoCard[i]}
 `);
  
  
let p1Card;
 switch(playerOneCard[i]){
   case "J": p1Card = 11;
     break;
   case "Q": p1Card = 12;
     break;
   case "K": p1Card = 13;
     break;
   case "A": p1Card = 14;
     break;
   default: p1Card = parseInt(playerOneCard[i]);
 }
  
 let p2Card;
 switch(playerTwoCard[i]){
   case "J": p2Card = 11;
     break;
   case "Q": p2Card = 12;
     break;
   case "K": p2Card = 13;
     break;
   case "A": p2Card = 14;
     break;
   default: p2Card = parseInt(playerTwoCard[i]);
 }
 
    takeTurns(p1Card, p2Card);  

};

//compare card values
function takeTurns(p1, p2){
    if(p1 > p2){
        scoreP1 += 1;
        console.log("PLAYER 1 🥇 scores a point!")
    }else if (p1 < p2) {
        scoreP2 += 1;
        console.log("PLAYER 2 🥈 scores a point!")
    }else {
        console.log('Tied! No points awarded...');
    }
}


//At the end of the game, alert scores
console.log
(`
PLAYER 1 Score🎲:   ${scoreP1}
PLAYER 2 Score🎲:   ${scoreP2}
`);


// class Players(){
//     constructor(player){
//         this.player = player;
//     }
// }



// let deck = new Deck();
// deck.start();

























// function doSomething(x, y) {
//   if (typeof x != "string") {
//     throw new Error("x must be a string");
//   }
//   return x + y;
// }
