const btn = document.querySelector("boton1")
const hambu = document.getElementsByClassName("hamburguesa")


const abrir = () =>{
    hambu[0].classList.add("active")
}
const cerrar = () =>{
    hambu[0].classList.remove("active")
}