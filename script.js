//CALCULATOR //
var halfButton = document.getElementById("half-button");
var inputNumber = document.getElementById("half-input");

halfButton.addEventListener("click", divideNumber);

function divideNumber() {
  alert(inputNumber.value / 2);
  console.log("half of" + " " + inputNumber.value + "is" + inputNumber.value / 2);
}

//FORTUNE CALCUALTOR //
var inputFortune = document.getElementById("fortune-input");
var fortuneButton = document.getElementById("fortune-button");
var fortuneArray = ["you are blessed", "you are creative", "you are loved", "you are purposed", "you are accepted"]

fortuneButton.addEventListener("click", fortune);

var outputIndex;
var currentOutput = document.getElementById("fortune-outputText");

function fortune() {
  outputIndex = Math.floor(Math.random() * fortuneArray.length);
  currentOutput.innerHTML = inputFortune.value + ":" + " " + fortuneArray[outputIndex];
}

//FORTUNE RESTYLE//
currentOutput.addEventListener("mouseover", restyle);
function restyle() {
  currentOutput.style.color = "rgb(191,245,66)";
  currentOutput.style.fontSize = "30rem";
  currentOutput.style.transform = "translate(300px,400px)";
}
