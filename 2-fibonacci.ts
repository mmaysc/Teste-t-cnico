import * as read from 'readline-sync'

function fibonacci(num: number) {
  let value1 = 0;
  let value2 = 1;

  while (value2 < num) {
    [value1, value2] = [value2, value1 + value2];
    console.log('próximo valor: ', value2)
  }
  return value2 === num;
};

const valorUsuario = read.question('Digite o seu número: ');
const verificarNumero = parseInt(valorUsuario);

if (isNaN(verificarNumero)){
  console.log('O número fornecido não é válido.')
} else {
  const calcularFibonacci = fibonacci(verificarNumero)

  if (calcularFibonacci){
    console.log('O número %i pertence à sequência de fibonacci', verificarNumero)
  } else {
    console.log('O número %i não pertence à sequência de fibonacci', verificarNumero)
  }
}
