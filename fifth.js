// Desafio Operadores E / OU
//Desafio#1 

var fome = parseInt(prompt("Você está com fome?\n1 - Estou sim\n2 - Não estou "));
var dinheiro = parseInt(prompt("Você tem dinheiro?\n1 - Tenho\n2 - Não tenho "));

if(fome == 1 && dinheiro == 1){
    console.log("Vá ao Madero Burguer!!");
} else {
    console.log("Melhor comer em casa!!");
}

//OU

if (fome == 1 && dinheiro == 1) {
    console.log("Ou o Braith Burguers é a solução para você!? :) ");
} else if ( fome != 1 || dinheiro != 1) {
     console.log("Melhor comer em casa :( ");
}


 // Desafio #2

var cinto = prompt("Você está com o sinto de segurança?\n (responda com sim ou não)");
var alcool = prompt("VocÊ está alcoolizado?\n (responda com sim ou não) ");
var semaforo = prompt("O semáforo está verde?\n (responda com sim ou não)");

if (cinto == "sim" && alcool == "não" && semaforo == "sim"){
   console.log("Pode prosseguir.");
} else {
    console.log("Você devera ficar aqui.")
}