// [1 2 3 4 5 6 ] frame = 3
// 1 2 3 / 3 = 2
// 2 3 4 / 3
// 3 4 5 / 3
// 4 5 6 / 3
// retorno [2, 3, 4, 5]

function media(numeros, frame) {
  const retorno = [];

  for (let i = 0; i < numeros.length - frame; i++) {
    let somaFrame = 0;
    let j = 0;

    while (j < frame) {
      somaFrame += numeros[i + j];
      j++;
    }

    retorno.push(somaFrame / frame);
  }

  return retorno;
}
