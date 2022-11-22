let segundos = 00
let minutos = 00
let hora = 00
let contador

function iniciar(){
    timer()
    contador = setInterval(timer, 1000)
}

function pausar(){
    clearInterval(contador)
}

function parar(){
    clearInterval(contador)
    segundos = 00
    minutos = 00
    hora = 00

    visor.innerHTML = `00:00:00`
}

function timer(){
    segundos++

    if(segundos == 60){
        minutos++
        segundos = 00
    }
    else if( minutos == 60){
        hora++
        minutos = 00
    }
    visor = document.querySelector("p")
    visor.innerHTML = `${hora} : ${minutos} : ${segundos}`
}



