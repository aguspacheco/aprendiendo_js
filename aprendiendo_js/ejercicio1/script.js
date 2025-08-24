/**
 * Crear una página HTML con un botón que cambie el color
de fondo usando JavaScript.
● HTML: Un título <h1>, un párrafo y un botón.
● CSS: Estilo básico para el texto y el botón.
● JS: Al hacer clic en el botón, cambia el color de fondo
de la página a un color aleatorio.
 */

document.getElementById("btnColor").addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});
