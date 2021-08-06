let mailList = ["mailacaso@gmail.com" , "nonloso@gmail.com" , "lamiamail@gmail.com" , "latuamail@gmail.com"]

let mailUtente = prompt("Inserisci la tua mail:");


if ( mailList.includes(mailUtente) ){
    document.getElementById("valid-mail").innerHTML = "La sua mail è valida"
}else {
    document.getElementById("unvalid-mail").innerHTML = "La sua mail non è valida"
    
}

alert ("Ora giocheremo a dadi")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let numeroUtente = getRandomInt(6) + 1;

let numeroComputer = getRandomInt(6) + 1;

document.getElementById("numero-utente").innerHTML = numeroUtente;
document.getElementById("numero-computer").innerHTML = numeroComputer;

if (numeroUtente > numeroComputer){
    document.getElementById("vincitore").innerHTML = "sei tu! Complimenti.";
}else if(numeroUtente < numeroComputer){
    document.getElementById("vincitore").innerHTML = "è il computer! Mi dispiace.";
}else{
    document.getElementById("vincitore").innerHTML = "non c'è. Siamo pari.";

}

