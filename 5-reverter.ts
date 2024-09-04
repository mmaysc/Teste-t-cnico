import * as string from 'readline-sync'

function inverter(palavra: string){
    var novaString = '';

    for (var i = palavra.length -1; i >= 0; i--){
        novaString += palavra[i];
    };

    return novaString;
};

const valorUsuario = string.question('Digite sua palavra: ');
const palavra = valorUsuario;

const palavraInvertida = inverter(palavra)

console.log('Sua palavra invertida é: %s', palavraInvertida)