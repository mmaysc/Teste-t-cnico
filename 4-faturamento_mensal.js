var faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "outros": 19849.53
};
function calcular(faturamento) {
    var total = 0;
    for (var _i = 0, _a = Object.values(faturamento); _i < _a.length; _i++) {
        var valor = _a[_i];
        total += valor;
    }
    var percentual = {};
    for (var _b = 0, _c = Object.entries(faturamento); _b < _c.length; _b++) {
        var _d = _c[_b], estado = _d[0], valor = _d[1];
        percentual[estado] = (valor / total) * 100;
    }
    return percentual;
}
var percentual = calcular(faturamento);
for (var estado in percentual) {
    console.log('Percentual do estado de %s: %f%', estado, percentual[estado].toFixed(2));
}
