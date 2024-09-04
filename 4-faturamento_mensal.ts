const faturamento = {
"SP": 67836.43,
"RJ": 36678.66,
"MG": 29229.88,
"ES": 27165.48,
"outros": 19849.53
}

function calcular(faturamento: {[estado: string]: number}){
    let total = 0;

    for (const valor of Object.values(faturamento)){
        total += valor;
    }

    const percentual: { [estado: string]: number } = {};

    for (const [estado, valor] of Object.entries(faturamento)){
        percentual[estado] = (valor/total)*100
    }

    return percentual;
}

const percentual = calcular(faturamento);

for (const estado in percentual) {
    console.log('Percentual do estado de %s: %f%', estado, percentual[estado].toFixed(2))
}