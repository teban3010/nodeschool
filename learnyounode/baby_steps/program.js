process.argv.splice(0, 2);

console.log(process.argv.reduce((valorAnterior, valorActual, indice, vector) => Number(valorAnterior) + Number(valorActual)));