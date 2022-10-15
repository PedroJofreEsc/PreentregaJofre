

let game_on = confirm("Quieres jugar tic tac toe");

let tablero = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

let tablero_ori = [0, 1, 2] + "\n" + [3, 4, 5] + "\n" + [6, 7, 8];
let casillas_ocupadas = [];

const combinacion_ganadora = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];


function zona_juego(tablero, tablero_ori, casillas_ocupadas) {
    this.tablero = tablero;
    this.tablero_ori = tablero_ori;
    this.casillas_ocupadas = casillas_ocupadas;
}

function Jugador(nombre, turno) {
    this.nombre = nombre;
    this.turno = turno;
    this.ganador = false;
    this.movimientos = []
}

function cambiar_turno(jugador) {
    if (jugador.turno) {
        jugador.turno = false;
    }
    else {
        jugador.turno = false
    }

}

function turno(jugador, juego) {
    let reglas = confirm("quiere ver numero de casilas");
    if (reglas) {
        alert(juego.tablero_ori);
    }
    let elecion = prompt("seleciona el numero ")
    while (casillas_ocupadas.includes(elecion) || elecion < 0 || elecion > 8) {
        alert("casillas ocupadas\n" + casillas_ocupadas)
        elecion = prompt("numero ocupado seleciona otro numero \n o numero incorrecto escoja entre 0 y 8 ")
    }
    casillas_ocupadas.push(elecion);
    jugador.movimientos.push(elecion);
    if (elecion <= 2) {
        juego.tablero[0][elecion] = jugador.nombre;
    }
    else if (elecion <= 5) {
        juego.tablero[1][elecion - 3] = jugador.nombre;
    }
    else {
        juego.tablero[2][elecion - 6] = jugador.nombre;
    }
    alert("tablero\n" + tablero[0] + "\n" + tablero[1] + "\n" + tablero[2] + "\n")
}

function chequear_combinacion(jugador, combinacion_ganadora, game_on) {
    for (let i = 0; i <= 7; i++) {
        if (jugador.movimientos.includes(combinacion_ganadora[i][0].toString()) && jugador.movimientos.includes(combinacion_ganadora[i][1].toString()) && jugador.movimientos.includes(combinacion_ganadora[i][2].toString())) {
            jugador.ganador = true;
            prompt(jugador.nombre + "gano");
            game_on = false;
            return game_on
        }
    };
    return game_on
}

function chequear_ganador(jugador, juego, game_on) {

    if (juego.casillas_ocupadas.length >= 5) {
        chequear_combinacion(jugador, combinacion_ganadora, game_on);
        if (jugador.ganador) {
            console.log(jugador.nombre + "gano")
            game_on = false
        }

        if (juego.casillas_ocupadas.length === 9) {
            game_on = false;
            alert("nadie gano")
        }
        return game_on
    }
    return game_on

}

let P1 = new Jugador("P1", true);
let CPU = new Jugador("CPU", false);
let juego = new zona_juego(tablero, tablero_ori, casillas_ocupadas)

while (game_on) {
    debugger
    alert("jugador uno tu turno")
    turno(P1, juego);
    game_on = chequear_ganador(P1, juego, game_on);

    if (!game_on) {
        break
    }
    alert("jugador 2 tu turno")
    turno(CPU, juego)
    game_on = chequear_ganador(CPU, juego, game_on)
}
