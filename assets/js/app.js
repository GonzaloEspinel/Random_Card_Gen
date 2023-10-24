
window.onload = function() {
  function randomPokerCard() {
    const suits = ['♥', '♦', '♣', '	♠'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'A'];

    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];

    return `${randomValue} of ${randomSuit}`;
}

console.log(randomPokerCard());

}