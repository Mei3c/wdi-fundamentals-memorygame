var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
console.log("User flipped queen");
var cardOne = cards[1]; //queen
cardsInPlay.push(cardOne); //cardsInPlay["queen"]
var cardTwo = cards[2]; //king 
cardsInPlay.push(cardTwo); //cardsInPlay["queen", "king"]
console.log("User flipped king");
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0]===cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try againß");
	}
}