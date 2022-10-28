
//json guardar estado del juego en reset

let game_on = false;
let casillas_ocupadas = ["", "", "", "", "", "", "", "", ""];
const combinacion_ganadora = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];


function Jugador(nombre, turno) {
    this.nombre = nombre;
    this.turno = turno;
}

let X = new Jugador("X", true);
let O = new Jugador("O", false);

let jugador_activo= X


//Selecionar elementos del html a modificar
const cell = document.querySelectorAll(".cell")
const estado = document.querySelector(".estado")
const restart = document.querySelector(".restart")
//funciones del juego

function iniciar_tictactoe() {
    game_on = true
    cell.forEach(cell => {
        cell.addEventListener("click", click_cell)
    })
    restart.addEventListener("click", resetear)
    estado.innerText = `TURNO DE ${X.nombre} `
}

function click_cell() {
    
    if (game_on){
        const numero_cell = this.getAttribute("numero"); 
        console.log(this.innerHtml)
        //chequear si ya se uso el espcaio
        if (this.innerText===""){
            this.innerText=jugador_activo.nombre
            cambiar_turno()
            estado.innerText=`TURNO DE ${jugador_activo.nombre} `
    }

    }
    

}

function cambiar_turno() {
    if (jugador_activo.nombre==="X") {
        jugador_activo= O;
    }
    else {
        jugador_activo= X
    }

}

function chequear_combinacion() {

}

function chequear_ganador(jugador, juego, game_on) {


}

function resetear(){
    cell.forEach(cell => {
        cell.innerText=""
    })
    estado.innerText = `TURNO DE ${X.nombre} `
    jugador_activo=X
    game_on=true
}

iniciar_tictactoe()