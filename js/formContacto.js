let formContacto = document.getElementById("formContacto")
console.log(formContacto)

formContacto.addEventListener("submit", obtenerDato);

function obtenerDato(e) {
    e.preventDefault();
    let inputNombre =  document.getElementById("inputNombre")
    let inputApellido =  document.getElementById("inputApellido")
    let inputEmail =  document.getElementById("inputEmail")
    let inputTelefono =  document.getElementById("inputTelefono")
    //Ver inputs tipo radio
    //ver inputs tipo select
    let inputAnio =  document.getElementById("inputAnio")
    let inputDesc =  document.getElementById("inputDesc")
    console.log(inputNombre.value)
    console.log(inputApellido.value)
    console.log(inputEmail.value)
    console.log(inputTelefono.value)
    console.log(inputAnio.value)
    console.log(inputDesc.value)
    console.log("Se ha enviado el Form")
    formContacto.reset();
}