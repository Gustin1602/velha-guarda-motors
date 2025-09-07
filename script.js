// Controle de fonte
let fontSize = 16;
const body = document.body;

document.getElementById("aumentar-fonte").addEventListener("click", () => {
  fontSize += 2;
  body.style.fontSize = fontSize + "px";
});

document.getElementById("diminuir-fonte").addEventListener("click", () => {
  if (fontSize > 10) {
    fontSize -= 2;
    body.style.fontSize = fontSize + "px";
  }
});

// Modo escuro
const btnModoEscuro = document.getElementById("modo-escuro");
btnModoEscuro.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  btnModoEscuro.textContent = body.classList.contains("dark-mode") 
    ? "☀️ Modo Claro" 
    : "🌙 Modo Escuro";
});

// Navegação com teclado (setas e espaço)
const cards = document.querySelectorAll(".carro-card");
let index = 0;

document.addEventListener("keydown", (e) => {
  if (["ArrowRight", "ArrowDown"].includes(e.key)) {
    index = (index + 1) % cards.length;
    cards[index].focus();
  } else if (["ArrowLeft", "ArrowUp"].includes(e.key)) {
    index = (index - 1 + cards.length) % cards.length;
    cards[index].focus();
  } else if (e.key === " " || e.key === "Enter") {
    e.preventDefault();
    cards[index].querySelector("button").click();
  }
});
