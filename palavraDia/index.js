// O input vai ser sempre constituido de uma string com 5 letras
// O jogo deve respeitar as seguintes regras:
// Dada a palavra-do-dia (a palavra que é a resposta para o problema):

// - Se o usuário escreveu uma letra que não existe na palavra do dia
// retorne Cinza

// - Se o usuário escreveu uma letra que existe na palavra do dia porém
// em uma posição diferente, retorne Amarelo

// - Se o usuário escreveu uma letra que existe na palavra do dia e está
// na mesma posição, retorne Verde

// Ou seja
// Cinza: Se a letra não existe na palavra
// Amarelo: Se a letra existe e está na posição errada
// Verde: Se a letra existe e está na posição correta

// - A palavra-do-dia e a entrada do usuário serão sempre formadas por letras minúsculas.

// Ex:
// Palavra-do-dia =   'pedro'
// Texto do usuário = 'peras'
// Retorno esperado = ['Verde','Verde','Amarelo','Cinza','Cinza']

// Texto do usuário = 'porta'
// Retorno esperado = ['Verde','Amarelo','Amarelo','Cinza','Cinza']

// EXTRA: resolver o exercício baseado em um input do usuário via página HTML, demonstrar o resultado em quadrados nas cores

const getUserInput = () => {
  const entrada = document.querySelector("#userInput").value;

  if (entrada.length !== 5) {
    alert("Entrada inválida");
    return;
  }

  return entrada;
};

const palavraDoDia = "pedro";
// const userInput = "porta";

function demostraResultado(resposta) {
  const boxes = document.querySelectorAll(".box");

  for (let i = 0; i < resposta.length; i++) {
    boxes[i].style.background = resposta[i];
  }
}

function verificaPalavra() {
  const userInput = getUserInput();
  console.log("entrada: ", userInput);

  // minha resposta
  const resposta = [];

  // fazer iteração na entrada do usuário
  // O(n²)
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === palavraDoDia[i]) {
      resposta.push("green");
    } else if (palavraDoDia.includes(userInput[i])) {
      resposta.push("yellow");
    } else {
      resposta.push("grey");
    }
  }

  demostraResultado(resposta);
}

// cada letra seria
