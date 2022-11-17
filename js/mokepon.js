const sectionReinciar = document.getElementById("reiniciar")
sectionReinciar.style.display = "none"
const botonMascotaJugador = document.getElementById('boton-mascotas')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const sectionSeleccionarAtaque = document.getElementById("selecc-ataque")
const botonReinicio = document.getElementById("boton-reiniciar")

const sectionSeleccionarMascota = document.getElementById("selecc-mascotas")
const inputHipoge = document.getElementById ('Hipoge')
const inputCapipego = document.getElementById ('Capipego')
const inputRatigueya = document.getElementById ('Ratigueya')
const inputLangostelvis = document.getElementById ('Langostelvis')
const inputTucapalma = document.getElementById ('Tucapalma')
const inputPydos = document.getElementById ('Pydos')
const spanMascotaJugador = document.getElementById ('nombre-mascota-jugador')


    
const spanMascotaeleccion = document.getElementById('nombre-mascota-enemigo')



const spanVidasJugador = document.getElementById("vidas_Jugador")
const spanVidasEnemigo = document.getElementById("vidas_Enemigo")


const seccionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataqueDelJugador')
const ataquesDelEnemigo = document.getElementById('ataqueDelEnemigo')

let eleccion = 0
let ataqueJugador = 0
let ataqueEnemigo = 0
let resultadoAtaque = 0
let vidasEnemigo = 3
let vidasJugador = 3


function iniciarJuego ()  {

    sectionSeleccionarAtaque.style.display = "none"
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra) 
    botonReinicio.addEventListener("click", reiniciarJuego)

}

function seleccionarMascotaJugador () {
    sectionSeleccionarMascota.style.display = "none"

    sectionSeleccionarAtaque.style.display = "flex"


    if (inputHipoge.checked){
        spanMascotaJugador.innerHTML = 'Hipoge'
    } else if (inputCapipego.checked) {
        spanMascotaJugador.innerHTML = 'Capipego'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = 'Langostelvis'
    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = 'Tucapalma'
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = 'Pydos'
    } else {
        alert ('Debes de seleccionar una mascota')
        reiniciarJuego()
    } 
    seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo (){
    

    eleccion = aleatorio(1,6)
    if (eleccion == 1){
        spanMascotaeleccion.innerHTML = 'Hipoge'
    } else if (eleccion == 2) {
        spanMascotaeleccion.innerHTML = 'Capipego'
    } else if (eleccion == 3) {
        spanMascotaeleccion.innerHTML = 'Ratigueya'
    } else if (eleccion == 4) {
        spanMascotaeleccion.innerHTML = 'Langostelvis'
    } else if (eleccion == 5) {
        spanMascotaeleccion.innerHTML = 'Tucapalma'
    } else if (eleccion == 6) {
        spanMascotaeleccion.innerHTML = 'Pydos'}

}


function ataqueFuego () {
    ataqueJugador = 'FUEGO 🔥'
    ataquesAleatorios()
}

function ataqueAgua () {
    ataqueJugador = 'AGUA 💧'
    
    ataquesAleatorios()
}   

function ataqueTierra () {
    ataqueJugador = 'TIERRA 🌍'
    
    ataquesAleatorios()
    
}

function ataquesAleatorios () {
    eleccion = aleatorio(1,3)
    if (eleccion == 1){
        ataqueEnemigo = 'FUEGO 🔥'
        
    } else if (eleccion == 2) {
        ataqueEnemigo = 'AGUA 💧'

    } else if (eleccion == 3) {
        ataqueEnemigo = 'TIERRA 🌍'
        
    }
    resultado()
}


function resultado ()  {
    
    
    
    if (ataqueJugador == ataqueEnemigo ) {
        resultadoAtaque = 'EMPATE 🔄'
    } else if (ataqueJugador == 'FUEGO 🔥' && ataqueEnemigo== 'TIERRA 🌍') {
        resultadoAtaque = 'GANAS 🎉'
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA 💧' && ataqueEnemigo== 'FUEGO 🔥') {
        resultadoAtaque = 'GANAS 🎉'
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }  else if (ataqueJugador == 'TIERRA 🌍' && ataqueEnemigo== 'AGUA 💧') {
        resultadoAtaque = 'GANAS 🎉'
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        resultadoAtaque = 'PIERDES ❌'
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    
    


    crearMensajes()

    revisarVidas()

}

function revisarVidas() {
    if (vidasEnemigo == 0){
        crearMensajeResultado("Felicitaciones Ganaste :D ")
    } else if (vidasJugador == 0){
        crearMensajeResultado("Malas noticias, perdiste :( ")
    }

}

function crearMensajeResultado(resultadoFinal) {

    

    seccionMensajes.innerHTML = resultadoFinal

    

    botonFuego.disabled = true

    botonAgua.disabled = true

    botonTierra.disabled = true

    sectionReinciar.style.display = "flex"

}

function crearMensajes() {

    
    
    
    
    //let notificacion = document.createElement('p')
    //let nuevoAtaqueDelJugador = document.createElement('p')
    //let nuevoAtaqueDelEnemigo = document.createElement('p')


    seccionMensajes.innerHTML = resultadoAtaque
    ataquesDelJugador.innerHTML = ataqueJugador
    ataquesDelEnemigo.innerHTML = ataqueEnemigo

    


    //seccionMensajes.appendChild(notificacion)
    //ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    //ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}

function reiniciarJuego(){
    location.reload()
}

function aleatorio (min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}



window.addEventListener('load', iniciarJuego)