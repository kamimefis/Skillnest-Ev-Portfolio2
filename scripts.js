const listaTareas= [];


function agregarTarea(evento){
    evento.preventDefault();
    console.log(evento);
    
    let tarea= evento.target.tarea.value;
    console.log(tarea);


        listaTareas.push(tarea);
        console.log(listaTareas);

        let listaTareasAgregadas= document.getElementById("lista-tareas");
        listaTareasAgregadas.innerHTML= "";

        listaTareas.forEach((tarea, index) => {
            let elemento= `<li>
                <input type="checkbox" name="tarea${index}" id="tarea${index}">
                <span>${tarea}</span>
                <button onclick="eliminarTarea(${index})">Eliminar</button>
            </li>`;
            listaTareasAgregadas.innerHTML += elemento;
        })

        tarea= "";
}

function eliminarTarea(index){
     listaTareas.splice(index, 1);

    let listaTareasAgregadas = document.getElementById("lista-tareas");
    listaTareasAgregadas.innerHTML = "";
    listaTareas.forEach((tarea, index) => {
        let elemento =
            `
                <li>
                    <input type="checkbox" name="tarea${index}" id="tarea${index}">
                    <span>${tarea}</span>
                    <button onclick="eliminarTarea(${index})">Eliminar</button>
                </li>
            `;
        listaTareasAgregadas.innerHTML += elemento;
    });

}

// function mostrarTareas(){}

