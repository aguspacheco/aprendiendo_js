let contador = 0;
const mostrar = document.getElementById("contador");

document.getElementById("btnSumar").addEventListener("click", () => {
  contador++;
  mostrar.textContent = contador;
});

document.getElementById("btnRestar").addEventListener("click", () => {
  contador--;
  mostrar.textContent = contador;
});
