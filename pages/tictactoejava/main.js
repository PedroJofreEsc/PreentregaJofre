//agregar sweet alert para informar victoria o resetear contadores 
//indicador de si el juego esta activo
let game_on = false;

function Jugador(nombre, turno, victorias) {
    this.nombre = nombre;
    this.turno = turno;
    this.contador = victorias;
}

let X = new Jugador("X", true, contadorx);
let O = new Jugador("O", false, contadoro);
let jugador_activo = X




//funciones del juego

function iniciar_tictactoe() {

    cell.forEach(cell => {
        cell.addEventListener("click", click_cell)
    });
    restart.addEventListener("click", cargar_data);
    estado.innerText = `INICIE PARTIDA `
    restart.innerText = "iniciar partida "
}

function cargar_data() {
    X.contador = contadorx;
    O.contador = contadoro;
    estado.innerText = `TURNO DE ${X.nombre} `
    restart.removeEventListener("click", cargar_data)
    restart.addEventListener("click", resetear);
    jugador_activo = X
    game_on = true
    casillas_ocupadas = ["", "", "", "", "", "", "", "", ""];
    restart.innerText = "reset"
    actualizar_tabla_posiciones()
}



function resetear() {
    cell.forEach(cell => {
        cell.innerText = ""
    })
    estado.innerText = `TURNO DE ${X.nombre} `
    jugador_activo = X
    game_on = true
    casillas_ocupadas = ["", "", "", "", "", "", "", "", ""];
    restart.innerText = "reset"
}


function click_cell() {

    const numero_cell = this.getAttribute("numero");

    //chequear si ya se uso el espcaio
    if (!casillas_ocupadas[numero_cell] == "" || !game_on) {
        return
    }
    this.innerText = jugador_activo.nombre
    casillas_ocupadas[numero_cell] = jugador_activo.nombre
    chequear_ganador()

}

function cambiar_turno() {
    if (jugador_activo.nombre === "X") {
        jugador_activo = O;
    }
    else {
        jugador_activo = X
    }
    estado.innerText = `TURNO DE ${jugador_activo.nombre} `

}


function chequear_ganador() {
    let existe_ganador = false;

    for (let i = 0; i < combinacion_ganadora.length; i++) {
        const casilla1 = casillas_ocupadas[combinacion_ganadora[i][0]];
        const casilla2 = casillas_ocupadas[combinacion_ganadora[i][1]];
        const casilla3 = casillas_ocupadas[combinacion_ganadora[i][2]];
        if (casilla1 == "" || casilla2 == "" || casilla3 == "") {
            //si existe una celda vacia pasar siguiente combinacion
            continue
        }
        if (casilla1 == casilla2 && casilla2 == casilla3) {
            existe_ganador = true;
            break
        }

    }
    if (existe_ganador) {
        game_on = false;
        estado.innerText = ` ${jugador_activo.nombre} GANO `;
        jugador_activo.contador += 1;
        actualizar_tabla_posiciones();
        almacenar_datos()
    }
    else if (!casillas_ocupadas.includes("")) {
        game_on = false;
        estado.innerText = ` EMPATE `;
        actualizar_tabla_posiciones();
        empate += 1;
        almacenar_datos()
    }
    //s no se cumple condiciones de termino cambiar jugador
    else {
        cambiar_turno()
    }


}

function actualizar_tabla_posiciones() {
    marcadorx.innerText = "X" + X.contador;
    marcadoro.innerText = "O" + O.contador;

}

iniciar_tictactoe()

actualizar_tabla_posiciones()