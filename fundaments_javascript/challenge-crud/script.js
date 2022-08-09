addEventListener("load", start);

let globalNames = [];
let inputName = null;

function start() {
  inputName = document.querySelector("#inputName");
  preventFormSubmit();
  activeInput();
  render();
}

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  let form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmit);
}

function activeInput() {
  function insertName(newName) {
    globalNames.push(newName);
  }

  function handleTyping(event) {
    if (event.key === "Enter") {
      insertName(event.target.value);
      console.log(globalNames);
      render(inputName.value);
      inputName.value = "";
    }
  }

  inputName.focus();
  inputName.addEventListener("keyup", handleTyping);
}

function render(name) {
  let divNames = document.getElementById("names");

  let ul = document.createElement("ul");

  for (let i = 0; i < globalNames.length; i++) {
    let currentName = globalNames[i];

    let li = document.createElement("li");
    li.textContent = currentName;
    ul.appendChild(li);
  }
  divNames.appendChild(ul);
}
