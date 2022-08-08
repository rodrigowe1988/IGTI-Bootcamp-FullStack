console.log("03 -> cap 03");

let input = document.querySelector("#input01");
input.value = "Rodrigo";

let theButton = document.getElementById("submitButton");
let hiddenText = document.getElementById("hiddenText");

theButton.addEventListener("click", event => {
	hiddenText.innerHTML = 'Show and disappear'
});
