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
