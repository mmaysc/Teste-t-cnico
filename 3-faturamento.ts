import * as fs from 'fs'
import * as path from 'path'

interface dados {
    dia_da_semana: string,
    dia_do_mes: number,
    valor: number
};

const json = path.join(__dirname, 'dados-faturamento.json');
const dados = fs.readFileSync(json, 'utf-8');
const faturamento: dados[] = JSON.parse(dados)

function mediaValores(faturamento: dados[]): number {
    let soma = 0;

    for (const item of faturamento) {
        soma += item.valor;
    }
    const media = soma / faturamento.length;

    return media
};

function calculoMaiorMenor(faturamento: dados[]) {
    if (faturamento.length === 0 )
        return 0;

    let menor = faturamento[0].valor;
    for (const item of faturamento) {
        if (item.valor < menor && item.valor > 1) {
            menor = item.valor
        }
    };

    let maior = faturamento[0].valor;
    for (const item2 of faturamento){
        if (item2.valor > maior) {
            maior = item2.valor
        }
    }
    return {menor, maior}
};

function contarDias(faturamento: dados[], media: number) {
    const dias: number[] = [];

    for (const item of faturamento) {
        if (item.valor > media) {
            dias.push(item.dia_do_mes)
        }
    };

    return dias
};

const menorValorMensal = calculoMaiorMenor(faturamento);
const mediaFinal = mediaValores(faturamento);
const diasAcimaMedia = contarDias(faturamento, mediaFinal);

console.log('O menor e maior valor mensal foram: ', menorValorMensal);
console.log('Dias da semana que foram acima da média: ', diasAcimaMedia)
