import { guardarTarea } from "./firebase.js";
const formulario = document.getElementById("task-form")

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    const titulo = formulario["task-title"];
    const descripcion = formulario["task-description"];
    guardarTarea(titulo.value,descripcion.value);
    formulario.reset();
})