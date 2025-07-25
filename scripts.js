const listaTareas = [];

function agregarTarea(evento) {
  evento.preventDefault();

  const inputTarea = evento.target.tarea;
  const tarea = inputTarea.value.trim();
  const mensaje = document.getElementById("mensaje");

  if (!tarea) {
    mensaje.textContent = "No puedes agregar una tarea vacía.";
    return;
  }

  listaTareas.push(tarea);
  inputTarea.value = "";
  mensaje.textContent = "";

  mostrarTareas();
}

function eliminarTarea(index) {
  listaTareas.splice(index, 1);
  mostrarTareas();
}

function mostrarTareas() {
  const listaTareasAgregadas = document.getElementById("lista-tareas");
  listaTareasAgregadas.innerHTML = "";

  const fecha = new Date();
  const fechaFormateada = fecha.toLocaleDateString("es-ES");

  listaTareas.forEach((tarea, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    li.innerHTML = `
      <div>
        <label for="tarea${index}" class="form-check-label">${tarea}</label>
        <p class="mb-0"><small class="text-muted">${fechaFormateada}</small></p>
      </div>
      <button onclick="eliminarTarea(${index})" class="btn btn-sm btn-danger">Eliminar</button>
    `;

    listaTareasAgregadas.appendChild(li);
  });
}
