/**
 * Crear un contador numérico que se pueda incrementar y
decrementar con botones.

● HTML: Mostrar un número inicial, y dos botones (+ y -).
● CSS: Estilizar el contador y botones.
● JS: Al presionar +, aumentar el número; al presionar -,
disminuirlo, actualizando el valor mostrado.
 */

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
