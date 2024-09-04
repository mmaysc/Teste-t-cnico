"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var string = require("readline-sync");
function inverter(palavra) {
    var novaString = '';
    for (var i = palavra.length - 1; i >= 0; i--) {
        novaString += palavra[i];
    }
    ;
    return novaString;
}
;
var valorUsuario = string.question('Digite sua palavra: ');
var palavra = valorUsuario;
var palavraInvertida = inverter(palavra);
console.log('Sua palavra invertida é: %s', palavraInvertida);
