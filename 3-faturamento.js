"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
;
var json = path.join(__dirname, 'dados-faturamento.json');
var dados = fs.readFileSync(json, 'utf-8');
var faturamento = JSON.parse(dados);
function mediaValores(faturamento) {
    var soma = 0;
    for (var _i = 0, faturamento_1 = faturamento; _i < faturamento_1.length; _i++) {
        var item = faturamento_1[_i];
        soma += item.valor;
    }
    var media = soma / faturamento.length;
    return media;
}
;
function calculoMaiorMenor(faturamento) {
    if (faturamento.length === 0)
        return 0;
    var menor = faturamento[0].valor;
    for (var _i = 0, faturamento_2 = faturamento; _i < faturamento_2.length; _i++) {
        var item = faturamento_2[_i];
        if (item.valor < menor && item.valor > 1) {
            menor = item.valor;
        }
    }
    ;
    var maior = faturamento[0].valor;
    for (var _a = 0, faturamento_3 = faturamento; _a < faturamento_3.length; _a++) {
        var item2 = faturamento_3[_a];
        if (item2.valor > maior) {
            maior = item2.valor;
        }
    }
    return { menor: menor, maior: maior };
}
;
function contarDias(faturamento, media) {
    var dias = [];
    for (var _i = 0, faturamento_4 = faturamento; _i < faturamento_4.length; _i++) {
        var item = faturamento_4[_i];
        if (item.valor > media) {
            dias.push(item.dia_do_mes);
        }
    }
    ;
    return dias;
}
;
var menorValorMensal = calculoMaiorMenor(faturamento);
var mediaFinal = mediaValores(faturamento);
var diasAcimaMedia = contarDias(faturamento, mediaFinal);
console.log('O menor e maior valor mensal foram: ', menorValorMensal);
console.log('Dias da semana que foram acima da média: ', diasAcimaMedia);
