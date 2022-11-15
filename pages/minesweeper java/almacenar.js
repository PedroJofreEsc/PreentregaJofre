//local storage

const almacenar_datos = () => {
    localStorage.setItem("perdidas", num_derrotas)
    localStorage.setItem("victorias", num_victorias)
}
const recuperar_datos = () => {

    let num_victorias = localStorage.getItem("victorias") ? + localStorage.getItem("victorias") : 0
    let num_derrotas = localStorage.getItem("perdidas") ? + localStorage.getItem("perdidas") : 0

}

document.addEventListener("DOMContentLoaded", recuperar_datos)