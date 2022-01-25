function verificaEsquerdaDireita(palavra, matriz, i, j) {
  const ocorr = [];

  for (let h = 0; h < palavra.length; h++) {
    const tamanhoLinha = matriz[i].length;

    if (j + h >= tamanhoLinha || palavra[h] !== matriz[i][j + h]) {
      return [];
    }

    ocorr.push([i, j + h]);
  }

  return ocorr;
}

export default function verificaOcorrencias(palavra, grade) {
  let ocorr = [];

  for (let i = 0; i < grade.length; i++) {
    for (let j = 0; j < grade[i].length; j++) {
      if (palavra[0] === grade[i][j]) {
        ocorr = ocorr.concat(verificaEsquerdaDireita(palavra, grade, i, j));
      }
    }
  }

  return ocorr;
}
