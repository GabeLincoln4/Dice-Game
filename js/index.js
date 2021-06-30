var diceImgClass = ".dice-image1";
var diceImgClass2 = ".dice-image2";

function randomize(diceImg) {
  var diceNum = (Math.random() * 6) + 1;
  diceNum = Math.floor(diceNum);
  var numValue = 0;
  // var diceImg1 = document.querySelector(".dice-image1");
  // var diceImg2 = document.querySelector(".dice-image2");
  if (diceNum === 1) {
    diceImg = document.querySelector(diceImg).setAttribute("src", "img/dice1.png");
    numValue = 1;
  } else if (diceNum === 2) {
    diceImg = document.querySelector(diceImg).setAttribute("src", "img/dice2.png");
    numValue = 2;
  } else if (diceNum === 3) {
    diceImg = document.querySelector(diceImg).setAttribute("src", "img/dice3.png");
    numValue = 3;
  } else if (diceNum === 4) {
    diceImg = document.querySelector(diceImg).setAttribute("src", "img/dice4.png");
    numValue = 4;
  } else if (diceNum === 5) {
    diceImg = document.querySelector(diceImg).setAttribute("src", "img/dice5.png");
    numValue = 5;
  } else {
    diceImg = document.querySelector(diceImg).setAttribute("src", "img/dice6.png");
    numValue = 6;
  }

  return numValue;
}

var dice1Result = randomize(diceImgClass);
var dice2Result = randomize(diceImgClass2);

console.log(dice1Result);

function winnerDecider(dice1Result, dice2Result) {
  if (dice1Result > dice2Result){
    document.querySelector(".title").textContent = "Player 1 Wins";
  } else if (dice1Result < dice2Result) {
    document.querySelector(".title").textContent = "Player 2 Wins";
  } else {
    document.querySelector(".title").textContent = "Draw!";
  }
}

var decision = winnerDecider(dice1Result, dice2Result);
