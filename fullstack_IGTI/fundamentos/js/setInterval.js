let isActive = null;
let button = null;
let interval = null;
let span = null;
let time = 0.0;

window.addEventListener("load", () => {
  button = document.querySelector("button");
  span = document.querySelector("span");

  button.addEventListener("click", () => {
    if (isActive) {
      isActive = false;

      //Paramos o setInterval com a variável
      clearTimeout(interval);
      time = 0;
      button.textContent = "Ativar";
    } else {
      isActive = true;
      button.textContent = "Desativar";

      // Definimos o setInterval e guardamos
      // a referência em uma variável
      interval = setInterval(() => {
        time++;
        span.textContent = time;
      }, 1000);
    }
  });
});
