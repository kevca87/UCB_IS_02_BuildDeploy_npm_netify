const nombre = document.querySelector("#nombre-input");
const edad = document.querySelector("#edad-input");
const form = document.querySelector("#saludador-form");


/*function genderSelect(gender){
    if(gender=="masculino")
    {
        var greeting = ""
    }
}
function greetingSelector(name,age,gender) {
    if (age<25){
        
        
    }else if{
        alert("Buenos dias mi lord "+nombre.value);
    }
}*/

form.addEventListener("submit",event=>{
    if (edad.value<25){
        alert("Que hay de nuevo "+nombre.value);
    }else{
        alert("Buenos dias mi lord "+nombre.value);
    }
})