"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var read = require("readline-sync");
function fibonacci(num) {
    var _a;
    var value1 = 0;
    var value2 = 1;
    while (value2 < num) {
        _a = [value2, value1 + value2], value1 = _a[0], value2 = _a[1];
        console.log('próximo valor: ', value2);
    }
    return value2 === num;
}
;
var valorUsuario = read.question('Digite o seu número: ');
var verificarNumero = parseInt(valorUsuario);
if (isNaN(verificarNumero)) {
    console.log('O número fornecido não é válido.');
}
else {
    var calcularFibonacci = fibonacci(verificarNumero);
    if (calcularFibonacci) {
        console.log('O número %i pertence à sequência de fibonacci', verificarNumero);
    }
    else {
        console.log('O número %i não pertence à sequência de fibonacci', verificarNumero);
    }
}
