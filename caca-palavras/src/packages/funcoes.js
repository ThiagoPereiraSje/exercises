function verificaEsquerdaDireita(palavra, matriz, i, j, ocorr) {
  for (let h = 1; h < palavra.length; h++) {
    const tamanhoLinha = matriz[i].length;

    if (j + h >= tamanhoLinha || palavra[h] !== matriz[i][j + h]) {
      return;
    }

    ocorr.push([i, j]);
  }
}

export default function verificaOcorrencias(palavra, grade) {
  const ocorr = [];

  for (let i = 0; i < grade.length; i++) {
    for (let j = 0; j < grade[i].length; j++) {
      if (palavra[0] === grade[i][j]) {
        verificaEsquerdaDireita(palavra, grade, i, j, ocorr);
      }
    }
  }

  return ocorr;
}
