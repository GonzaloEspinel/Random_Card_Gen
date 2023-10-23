
window.onload = function() {
  function deckBuilder() {
    var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    var suits = ["&clubs;", "&spades;", "&hearts;", "&diams;"];

    var deck = [];

    for (var suitCounter = 0; suitCounter < suits.length; suitCounter++) {
      for (var rankCounter = 0; rankCounter < values.length; rankCounter++){
                deck.push(ranks[rankCounter] + suits[suitCounter]);
        
      }
     }
     console.log(deck);
    }
  }
