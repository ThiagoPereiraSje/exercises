/*
Criar uma função que dada uma lista retorne o maior número da lista
*/

function maiorNumero(lista) {
  if (!lista || lista.length === 0) {
    throw new Error("Não há itens na lista!");
  }

  let maior = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > maior) {
      maior = lista[i];
    }
  }

  return maior;
}

function indexMaiorNumero(lista) {
  if (!lista || lista.length === 0) {
    throw new Error("Não há itens na lista!");
  }

  let index = 0;
  let maior = lista[index];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > maior) {
      maior = lista[i];
      index = i;
    }
  }

  return index;
}

function menorNumero(lista) {
  if (!lista || lista.length === 0) {
    throw new Error("Não há itens na lista!");
  }

  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  return menor;
}

function somaNumeros(lista) {
  if (!lista || lista.length === 0) {
    return 0;
  }

  let soma = 0;

  for (let i = 0; i < lista.length; i++) {
    soma += lista[i];
  }

  return soma;
}

function media(lista) {
  if (!lista || lista.length === 0) {
    throw new Error("Não há itens na lista!");
  }

  let soma = somaNumeros(lista);

  return soma / lista.length;
}

/*
Uma lista e um numero e retornar a quantidade de números que são divisiveis
*/

function somaDivisiveis(lista, numero) {
  if (!lista || lista.length === 0) {
    throw new Error("Não há itens na lista!");
  }

  if (numero === 0) {
    throw new Error("Não é um número válido!");
  }

  let count = 0;

  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % numero === 0) {
      count++;
    }
  }

  return count;
}

// 6
let index = indexMaiorNumero([0, 1, 2, 3, 4, 5, 50]);

console.log("index do maior número: ", index);

// Criar um roteiro para a entrevista
// Pensar em perguntas que o entrevistador pode fazer
/*
  Coisas de programação:
    1 - Pensar sempre em casos de exceção;
    2 - Perguntas sobre a implementação;
    3 - Melhorar os testes;
*/
