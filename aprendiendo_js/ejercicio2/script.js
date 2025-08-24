/**
 * Crear una lista de tareas donde el usuario pueda agregar y
eliminar elementos.
● HTML: Un campo de texto, un botón para agregar, y
una lista (<ul>).
● CSS: Estilos para la lista y los botones.
● JS: Cuando el usuario escribe una tarea y presiona
agregar, la tarea aparece en la lista; al hacer clic en
cada tarea, esta se elimina.
 */
const input = document.getElementById("tareaInput");
const btn = document.getElementById("btnAgregar");
const lista = document.getElementById("listaTareas");

btn.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    li.addEventListener("click", () => li.remove());
    lista.appendChild(li);
    input.value = "";
  }
});
