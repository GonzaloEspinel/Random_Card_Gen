
window.onload = function() {

  //  This function generates a random suit and value 
  function randomPokerCard() {
    const suits = ['♥', '♦', '♣', '♠'];
    const values = ['A','2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
// Math.random() returns a random number
// Math.floor() is used to get this value
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];

    // querySelector = selects css class , innerHTML sends result to html div class 

    document.querySelector(".topSuit").innerHTML = randomSuit;
    document.querySelector(".cardNum").innerHTML = randomValue;
    document.querySelector(".botSuit").innerHTML = randomSuit;

    // querySelector = selects css class assigns color by comparison of result 

    if (randomSuit === "♥" || randomSuit === "♦") {
      document.querySelector(".card").style.color = "crimson";
      document.querySelector(".cardNum").style.color = "crimson";
    } else {
      document.querySelector(".card").style.color = "black";
      document.querySelector(".cardNum").style.color = "black";
    }
  }
  // get new card button generates new card
  window.addEventListener("click", () => {
    randomPokerCard();
  });
}