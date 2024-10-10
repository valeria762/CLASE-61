const formulario = document.getElementById("task-form")

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    const titulo = formulario["task-title"];
    const descripcion = formulario["task-description"];
    console.log(titulo.value);
    console.log(descripcion.value);
    formulario.reset();
})