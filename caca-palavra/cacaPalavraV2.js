// Azul
// [0, 7]
// [4, 0]
// [6, 11]

const grid = [
  ["A", "B", "A", "C", "A", "T", "E", "A", "Z", "U", "L", "P", "E"], // 0
  ["P", "P", "L", "U", "L", "A", "O", "W", "Q", "A", "Z", "U", "S"], // 1
  ["D", "O", "T", "R", "E", "S", "K", "E", "W", "Q", "A", "Z", "U"], // 2
  ["R", "I", "O", "V", "A", "M", "P", "E", "T", "A", "D", "U", "A"], // 3
  ["A", "D", "K", "A", "L", "S", "A", "O", "D", "S", "Z", "D", "D"], // 4
  ["Z", "D", "K", "S", "Z", "S", "A", "O", "D", "A", "K", "D", "D"], // 5
  ["U", "O", "T", "S", "L", "U", "A", "O", "L", "U", "Z", "A", "P"], // 6
  ["L", "O", "T", "T", "T", "R", "Z", "L", "P", "S", "K", "D", "D"], // 7
]; //0   1    2    3    4    5    6    7    8   9     10   11  12

const ocorrencias = [];

function verificaEsquerdaDireita(palavra, matriz, i, j) {
  for (let h = 1; h < palavra.length; h++) {
    const tamanhoLinha = matriz[i].length;
    if (j + h >= tamanhoLinha || palavra[h] != matriz[i][j + h]) {
      return;
    }
  }

  ocorrencias.push([i, j]);
}

function verificaDireitaEsquerda(palavra, matriz, i, j) {
  for (let h = 1; h < palavra.length; h++) {
    if (j - h < 0 || palavra[h] != matriz[i][j - h]) {
      return;
    }
  }

  ocorrencias.push([i, j]);
}

function verificaCimaBaixo(palavra, matriz, i, j) {
  for (let h = 1; h < palavra.length; h++) {
    const tamanhoColuna = matriz.length;
    if (i + h >= tamanhoColuna || palavra[h] != matriz[i + h][j]) {
      return;
    }
  }

  ocorrencias.push([i, j]);
}

function verificaOcorrencias(palavra, matriz) {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (palavra[0] == matriz[i][j]) {
        verificaEsquerdaDireita(palavra, matriz, i, j);
        verificaDireitaEsquerda(palavra, matriz, i, j);
        verificaCimaBaixo(palavra, matriz, i, j);
      }
    }
  }
}

verificaOcorrencias("AZUL", grid);
console.log("ocorrencias: ", ocorrencias);
