// Azul
// (0, 7)

const grid = [
["A", "B", "A", "C", "A", "T", "E", "A", "Z", "U", "L", "P", "E"], // 0
["P", "P", "L", "U", "L", "A", "O", "W", "Q", "A", "Z", "U", "S"], // 1
["D", "O", "T", "R", "E", "S", "K", "E", "W", "Q", "A", "Z", "U"], // 2
["R", "I", "O", "V", "A", "M", "P", "E", "T", "A", "D", "U", "A"], // 3
["A", "D", "K", "A", "L", "S", "A", "O", "D", "S", "Z", "D", "D"], // 4
["Z", "D", "K", "S", "Z", "S", "A", "O", "D", "A", "K", "D", "D"], // 5
["U", "O", "T", "S", "L", "U", "A", "O", "L", "U", "Z", "A", "P"], // 6
["L", "O", "T", "T", "T", "R", "Z", "L", "P", "S", "K", "D", "D"]  // 7
];

function calcOcorrenciaEquerdaDireita(palavra, matriz) {
  const ocorrencias = [];

  for (let i = 0; i < matriz.length; i++) {
    for(let j = 0; j < matriz[i].length; j++) {
      
      if (palavra[0] == matriz[i][j]) {
        let igual = true;
        
        for(let h = 1; h < palavra.length; h++) {
          if ((j+h >= matriz[i].length) || (palavra[h] != matriz[i][j+h])) {
            igual = false;
            break;
          }
        }

        if (igual) {
          ocorrencias.push([i, j]);
        }
      }
    }
  }

  return ocorrencias;
}

function calcOcorrencias(palavra, matriz) {
  const ocorrencias = calcOcorrenciaEquerdaDireita(palavra, matriz);

  console.log(ocorrencias);
}

calcOcorrencias('AZUL', grid);