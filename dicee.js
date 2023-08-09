var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomDiceImage = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);

//2nd dice
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 wins!"
}
else if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "Oops! It's a tie"
}
else{
    document.querySelector("h1").innerHTML = "Player2 wins!"
}