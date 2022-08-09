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
      render(inputName.value);
      inputName.value = "";
    }
  }

  inputName.focus();
  inputName.addEventListener("keyup", handleTyping);
}

function render(name) {
  function createDeleteButton(index) {
    function deleteName() {
      globalNames.splice(index, 1);
		render();
    }

    let button = document.createElement("button");
    button.classList = "deleteButton";
    button.textContent = "x";

    button.addEventListener("click", deleteName);

    return button;
  }

  let divNames = document.getElementById("names");
  divNames.innerHTML = "";

  let ul = document.createElement("ul");

  for (let i = 0; i < globalNames.length; i++) {
    let currentName = globalNames[i];

    let li = document.createElement("li");

    let button = createDeleteButton(i);

    let span = document.createElement("span");
    span.textContent = currentName;

    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  }
  divNames.appendChild(ul);
  clearInput();
}

function clearInput() {
  inputName.value = "";
  inputName.focus();
}
