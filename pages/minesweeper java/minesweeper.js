//usar luxon para manejar tiempos, fechas y duraciones 
//preparar juego


function celda(x, y) {
    this.mina = false;
    this.numero = 0;
    this.elemento = document.createElement('div');
    this.x = x;
    this.y = y;

}

function crear_tablero(ancho, alto) {
    let tablero = [];
    for (i = 0; i < ancho; i++) {
        let columna = [];
        for (j = 0; j < alto; j++) {
            let casilla = new celda(i, j);
            //agregar atributos de la celda
            casilla.elemento.dataset.posicionx = i
            casilla.elemento.dataset.posiciony = j
            casilla.elemento.dataset.revelado = false
            casilla.elemento.dataset.bandera = false
            casilla.elemento.dataset.mina = false
            columna.push(casilla)
        }
        tablero.push(columna)
    }
    return tablero;
}

function eliminar_tablero() {

    let numero_celda = juego.children.length;
    for (let i = 0; i < numero_celda; i++) {
        juego.removeChild(juego.firstChild)
    }
}


function poner_bombas() {
    for (i = 0; i < numero_minas; i++) {
        let x = Math.floor(Math.random() * ancho);
        let y = Math.floor(Math.random() * alto);
        while (tablero[x][y].mina) {
            x = Math.floor(Math.random() * ancho);
            y = Math.floor(Math.random() * alto);
        }
        tablero[x][y].mina = true
        tablero[x][y].elemento.dataset.mina = 'true';
    }
}

function poner_numeros() {

    for (let i = 0; i < ancho; i++) {
        console.log(i)
        for (let j = 0; j < alto; j++) {
            if (!tablero[i][j].mina) {
                tablero[i][j].elemento.dataset.numero = minas_alrededor(i, j)

            }
        }
    }
}

function minas_alrededor(x, y) {

    let total_minas = 0
    //casos borde
    let i = x == 0 ? [0, 1] : x == ancho - 1 ? [-1, 0] : [-1, 0, 1]
    let j = y == 0 ? [0, 1] : y == alto - 1 ? [-1, 0] : [-1, 0, 1]
    i.forEach(fila => {
        j.forEach(columna => {
            if (tablero[x + fila][y + columna].mina) {
                total_minas++;
            }
        })
    })
    return total_minas;
}

function iniciar_minesweeper() {

    eliminar_tablero();
    juego.style.setProperty("--alto", alto);
    juego.style.setProperty("--ancho", ancho);

    game_on = true;
    tablero = crear_tablero(ancho, alto);
    tablero.forEach(fila => {
        fila.forEach(col => {
            juego.append(col.elemento)
            col.elemento.addEventListener("click", revelar_celda)
            col.elemento.addEventListener("contextmenu", e => {
                e.preventDefault()
                marcar_celda(col)
            })

        })
    })
    informacion.innerText = `Minas Restantes = ${numero_minas} `

    poner_bombas();

    poner_numeros();

}

//dificultad
function cargar_botones() {
    facil.addEventListener("click", nivel_facil)
    medio.addEventListener("click", nivel_medio)
    dificil.addEventListener("click", nivel_dificil)
}
//botones
function nivel_facil() {
    ancho = 4;
    alto = 5;
    numero_minas = 4;
    iniciar_minesweeper();
}

function nivel_medio() {
    ancho = 6;
    alto = 8;
    numero_minas = 10;
    iniciar_minesweeper();
}
function nivel_dificil() {
    ancho = 8;
    alto = 8;
    numero_minas = 20;
    iniciar_minesweeper();
}
function reset() {
    if (game_on && !numero_minas == 0) {
        alert("juego no terminado")
    }

}




// para visualizacion 
function revelar_celda() {

    if (game_on && this.dataset.mina === 'true') {
        Swal.fire({
            title: 'PERDISTE!',
            text: 'Escoga dificultad',
            icon: 'error',
            confirmButtonText: 'ok'
        })
        game_on = false
        num_derrotas++
        derrotas.innerHTML = `perdidas = ${num_derrotas} `
        almacenar_datos()
    }

    if (game_on && this.dataset.mina === 'false' && this.dataset.mina === 'false' && this.dataset.revelado === 'false' && this.dataset.bandera === 'false') {
        this.innerText = this.dataset.numero
        this.dataset.revelado = 'true'
    }
}

function marcar_celda(col) {


    if (game_on && col.elemento.dataset.revelado === 'false' && col.elemento.dataset.bandera === 'false') {
        col.elemento.innerText = "O"
        col.elemento.dataset.bandera = 'true'
        numero_minas--
        informacion.innerText = `Minas Restantes = ${numero_minas} `
    }
    else if (game_on && col.elemento.dataset.bandera === 'true') {
        col.elemento.innerText = ""
        col.elemento.dataset.bandera = 'false'
        numero_minas++
        informacion.innerText = `Minas Restantes = ${numero_minas} `
    }
}


//iniciar 
cargar_botones()