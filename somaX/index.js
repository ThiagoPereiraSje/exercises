// Duas lista de números inteiros e viricar quais pares tem a soma com valor de x.

// Ex: 5 [1, 2, 3] [4, 3, 2]
//     [2, 4]
// {2: true, 4: true}

// x = 5 [[4,1],[3,2]]

// array

// for i
//    for j
//      if (i+j == x)
//          array.push([i, j])



function verificaValores(x, lista1, lista2) {
  let array = [];

  for (let i = 0; i < lista1.length; i++) {
    for (let j = 0; j < lista2.length; j++) {
      if (lista1[i] + lista2[j] == x) {
        array.push([lista1[i], lista2[j]]);
      }
    }
  }

  return array;
}

function verificaV2(x, lista1, lista2) {
  let array = [];
  let map = {};

  // transforma a lista em um dicionário
  for (let i = 0; i < lista2.length; i++) {
    map[lista2[i]] = true;
  }

  for (let i = 0; i < lista1.length; i++) {
    let complemento = x - lista1[i];

    if (map[complemento]) {
      array.push([lista1[i], complemento]);
    }
  }

  return array;
}

//{ chave: '', 0}

// a + b = x
// a = x -b
// x -a = b
// console.log(verificaValores(5, [1, 2, 3], [2, 4]));
// console.log(verificaValores(2, [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]));
// console.log(verificaValores(2, [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]).length);

console.log(verificaV2(5, [1, 2, 3], [2, 4]));
console.log(verificaV2(2, [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]));
console.log(verificaV2(2, [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]).length);
