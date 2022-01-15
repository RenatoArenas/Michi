const playerOne = "X";
const playerTwo = "O";
let playerInf = "X";
const bloque = document.getElementsByClassName("michi-table--block");
const info = document.getElementById("michi-info");

let c = 0;

function ejecutarJuego() {
    for (let i = 0; i < 9; i++) {
        bloque[i].setAttribute('onclick', 'colocarCaracter(this)');
    }
    info.textContent = "Tu turno: X"
}

function intercalarCaracter(p1, p2) {
    let player;
    c++;
    console.log(c);
    if (c%2 == 0) {
        player = p2;
        playerInf = p1;
    }
    else {
        player = p1;
        playerInf = p2;
    }

    if (c < 9) {
        info.textContent = "Tu turno: " + playerInf;
    }
    else {
        info.textContent = "Juego terminado"
    }
    console.log(player);
    return player;
}

function colocarCaracter(i) {
    let caracter = intercalarCaracter(playerOne, playerTwo);
    let bloqueS = bloque[i.id];
    bloqueS.textContent = caracter;
    bloqueS.classList.remove("michi-table--active");
    bloqueS.onclick = null;
}
