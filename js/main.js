var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];
var checkForMatch =function(){
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0]===cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("You found a match!");
		}
	}
	
}
var flipCard = function (){
	this.getAttribute('data-id')
	this.setAttribute('src', cards[cardId].cardImage)
	cardsInPlay.push(cards[cardId].rank)
	checkForMatch();
}
var createBoard = function(){
	for (var i = 0; i < cards.length; i++) {
		 var createElement = document.createElement('img');
		 createElement.setAttribute('src','images/back.png');
		 createElement.setAttribute('data-id','i');
		 createElement.addEventListener('click', flipCard);
		 document.getElementById('game-board').appendChild(createElement)
	}
}
createBoard()

