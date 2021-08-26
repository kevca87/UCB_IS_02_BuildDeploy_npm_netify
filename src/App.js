const nombre = document.querySelector("#nombre-input");
const edad = document.querySelector("#edad-input");
const form = document.querySelector("#saludador-form");
form.addEventListener("submit",event=>{
    if (edad.value<25){
        alert("Que hay de nuevo "+nombre.value);
    }else{
        alert("Buenos dias mi lord "+nombre.value);
    }
})