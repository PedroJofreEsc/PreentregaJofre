//local storage

let contadorx = 0
let contadoro = 0
let empate = 0
const almacenar_datos = () => {
    localStorage.setItem("jugador1", X.contador)
    localStorage.setItem("jugador2", O.contador)
    localStorage.setItem("empate", empate)
}
const recuperar_datos = () => {
    if (localStorage.getItem("jugador1")) {
        contadorx = + localStorage.getItem("jugador1");
    };
    if (localStorage.getItem("jugador2")) {
        contadoro = + localStorage.getItem("jugador2")
    };

    if (localStorage.getItem("empate")) {
        empate = + localStorage.getItem("empate")
    };
}

document.addEventListener("DOMContentLoaded", recuperar_datos)