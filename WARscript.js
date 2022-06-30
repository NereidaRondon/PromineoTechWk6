let fullDeck = [2,3,4,5,6,7,8,9,10, 'J', 'Q', 'K', 'A',2,3,4,5,6,7,8,9,10,'J', 'Q', 'K', 'A',2,3,4,5,6,7,8,9,10,'J', 'Q', 'K', 'A',2,3,4,5,6,7,8,9,10,'J', 'Q', 'K', 'A'];

let shuffledDeck = fullDeck.sort(()=> 0.5 - Math.random());
let scoreP1 = 0;
let scoreP2 = 0;

  //create a class to deal deck and draw cards  
  class Cards{
    constructor(p1, p2){
      this.playerOneCard=[];
      this.playerTwoCard=[];
      this.p1Card = p1;
      this.p2Card = p2;
    }
    
    dealCards(){
      for(let i = 0; i < shuffledDeck.length; i++){
        if(i%2 ===0){
          this.playerOneCard.push(shuffledDeck[i]);
        }else{
          this.playerTwoCard.push(shuffledDeck[i]);
        }
      };
    };

    takeTurns (){
      for(let i = 0; i<shuffledDeck.length/2;i++){
        console.log 
        (`
        Turn: ${i+1}

        PLAYER 1 Card ♠️ ♦️ ♣️ ♥️:    ${this.playerOneCard[i]}           
        PLAYER 2 Card ♠️ ♦️ ♣️ ♥️:    ${this.playerTwoCard[i]}
        `);
        
          //assigns values to string cards
          switch(this.playerOneCard[i]){
            case "J": this.p1Card = 11;
            break;
            case "Q": this.p1Card = 12;
            break;
            case "K": this.p1Card = 13;
            break;
            case "A": this.p1Card = 14;
            break;
            default: this.p1Card = this.playerOneCard[i];
          }
          
          switch(this.playerTwoCard[i]){
            case "J": this.p2Card = 11;
            break;
            case "Q": this.p2Card = 12;
            break;
            case "K": this.p2Card = 13;
            break;
            case "A": this.p2Card = 14;
            break;
            default: this.p2Card = this.playerTwoCard[i];
          }
          
          if(this.p1Card > this.p2Card){
              scoreP1 += 1;
              console.log('➕1 point for 😎PLAYER 1'); 
          }else if (this.p1Card < this.p2Card) {
              scoreP2 += 1;
              console.log('➕1 point for 🤓PLAYER 2');
          }else {
              console.log('🎀Tied! No points awarded...');
          }
      };
    };
    
  }

    class Game{
      //start the game
      start(){
        //intro message
        console.log
        (`
                    Let's play
                💣🔥🧨 WAR 🧨🔥💣

          😎PLAYER 1  vs  🤓PLAYER 2

        Player with the most points wins!
        `);
        //sort cards to players, push into arrays
        let deal= new Cards();
        deal.dealCards();
        //put down cards AND assign points
        deal.takeTurns();
      } 
      
      winner(){
        if(scoreP1 > scoreP2){
          return '🏆 PLAYER 1 WINS!'
        } else if (scoreP1 < scoreP2){
          return '🏆 PLAYER 2 WINS!'
        } else{
          return '    🎀 TIED!'
        };
      }
      //show points and winner
      gameOver(){ 
        console.log
        (`       
        🔥🔥🔥  -GAME OVER-  🔥🔥🔥
        __________________________________     
        PLAYER 1 Score 🎯:   ${scoreP1}   
        
        PLAYER 2 Score 🎯:   ${scoreP2} 
        __________________________________
             ${game.winner(scoreP1, scoreP2)}
        
        ♠️ ♦️ ♣️ ♥️ ♠️ ♦️ ♣️ ♥️ ♠️ ♦️ ♣️ ♥️ ♠️ ♦️ ♣️         
        `);
        
      }
  };
//instance of Game  
let game = new Game();
//starts the game (instance.method)
game.start();
//shows score
game.gameOver();





function doSomething(x, y) {
  if (typeof x != "string") {
    throw new Error("x must be a string");
  }
  return x + y;
}