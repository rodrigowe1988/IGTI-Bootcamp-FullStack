console.log("Javascript is running...");

let paragraph = document.querySelector(".jsTest");
paragraph = paragraph.innerHTML = "This is a change with JS...";

const data = Array.from(document.querySelectorAll(".data"));
console.log(data);

// To calculate age:
let bornYear = 1988;
let dateNow = new Date();
let thisYear = dateNow.getFullYear();
const age = thisYear - bornYear;

data[1].textContent = `${age} years old`;
for (let i = 0; i < data.length; i++) {
  let currentElement = data[i];
  currentElement.className = "changeCSSWithJS";
}

const myTestWithH2 = document.querySelector("h2");
myTestWithH2.className = "h2Test";
