let intentos = 1;
let numeroSecreto = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;    
    return;
}
function verificarIntento()
{
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    if (numeroSecreto === numeroUsuario) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        //El usuario no acerto
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        }
        else
        {
            asignarTextoElemento('p','El número sercreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    
    return;
}

function limpiarCaja()
{
    document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto() 
{

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);   
    console.log(listaNumeroSorteados);
    //Si ya sorteamos todos los números
    if(listaNumeroSorteados.length == numeroMaximo)
    {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }
    else
    {

        //Si el número generado esta incluido en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } 
        else
        {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
    
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Dame un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego()
{
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //Generar número aleatorio
    //Inicialiar intentos
    condicionesIniciales();
    //Deshabilitar botón nuevo juego  
    document.querySelector('#reiniciar').setAttribute('disabled','true');  
}

condicionesIniciales();

