const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function capturarCarros(nomes, posicao) {
    if (posicao === nomes.length) {
        console.log('Não existe carro nessa posição')
    } else {
        let carrosCapturados = nomes.slice(posicao, posicao + 3);
        carrosCapturados = carrosCapturados.join(" - ");
        console.log(carrosCapturados);
    }
}


capturarCarros(nomes, posicao);