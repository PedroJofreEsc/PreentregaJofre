//logica del juego
function celda(x, y) {
    this.mina = false;
    this.revelado = false;
    this.numero = 0;
    this.bandera = false;
    this.elemento = document.createElement('div');
    this.x = x;
    this.y = y;
}

function crear_tablero(ancho, alto) {
    debugger
    let tablero = [];
    for (i = 0; i < ancho; i++) {
        let columna = [];
        for (j = 0; j < alto; j++) {
            let casilla = new celda(i, j);
            columna.push(casilla)
        }
        tablero.push(columna)
    }
    return tablero;
}

function poner_bombas(tablero, numero_minas) {
    for (i = 0; i < numero_minas; i++) {
        let x = Math.floor(Math.random() * ancho);
        let y = Math.floor(Math.random() * alto);
        while (!tablero[x, y].mina) {
            x = Math.floor(Math.random() * ancho);
            y = Math.floor(Math.random() * alto);
        }
        tablero[x, y].mina = true;
    }
}

function poner_numeros(tablero) {
    for (i = 0; i++; i < ancho) {
        for (j = 0; j++; j < alto) {
            if (!tablero[x, y].mina) {
                tablero[x, y].numero = minas_alrededor(tablero, x, y)
            }
        }
    }
}

function minas_alrededor(tablero, x, y) {
    let total_minas = 0
    if (x = 0) {
        let i = 1
    }

}

function iniciar_minesweeper() {
    game_on = true;
    let tablero = crear_tablero(ancho, alto);
    tablero.forEach(fila => {
        fila.forEach(col => {
            juego.append(col.elemento)
        })
    })
}


// para visualizacion 
