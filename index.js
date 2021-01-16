var randomNumber = Math.floor(((Math.random()) * 6) + 1);
var randomNumber2 = Math.floor(((Math.random()) * 6) + 1);

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (randomNumber < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
} else {
    document.querySelector("h1").textContent = "Draw!";
}