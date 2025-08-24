/**
 * Crear un formulario con campos de nombre y correo
electrónico, y un botón de envío. Validar que no estén
vacíos antes de enviar.

● HTML: Formulario con <input> para nombre y correo,
y botón enviar.
● CSS: Estilos para los campos y mensajes de error.
● JS: Al presionar enviar, verificar que los campos no
estén vacíos; si lo están, mostrar un mensaje de error;
si no, mostrar mensaje de éxito.
 */
const form = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;

  if (nombre === "" || correo === "") {
    mensaje.textContent = "Todos los campos son obligatorios";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "Formulario enviado correctamente";
    mensaje.style.color = "green";
  }
});
