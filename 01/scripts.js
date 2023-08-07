const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
const frutasInverso = frutas.reverse();
console.log(frutasInverso.join(', '))
frutas.reverse();
frutas.splice(0, 1)
frutas.splice(-1, 1, "Melão")
console.log(frutas);
