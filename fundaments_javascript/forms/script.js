console.log("03 -> cap 03");

let inputName = document.querySelector("#nameInput");
inputName.value = "Rodrigo";

let theButton = document.getElementById("submitButton");
let hiddenText = document.getElementById("hiddenText");

theButton.addEventListener("click", (event) => {
  hiddenText.innerHTML = "Show and disappear";
});

addEventListener("load", start);

function start() {
  let span = document.querySelector("#nameLength");
  span.textContent = "Char counter";
  inputName.addEventListener("keyup", countChars);

  let form = document.querySelector("form");
  form.addEventListener("submit", preventSubmit);
}

function countChars(event) {
  let count = event.target.value;
  let span = document.querySelector("#nameLength");
  //let totalString = inputName.value;
  span.textContent = count.length;
}

function preventSubmit() {
  let inputName = document.querySelector("#nameInput");
  alert(inputName.value + ' cadastrado com sucesso!')
}
