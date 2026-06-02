export function alugarFilme(nomeFilme, dataAluguel, preco) {
    return `Filme: ${nomeFilme} data que alugou o filme: ${dataAluguel} por R$ ${preco}`;
}

export function devolverFilme(nomeFilme, dataEntrega) {
    return `Filme: ${nomeFilme} data da entrega: ${dataEntrega}`;
}