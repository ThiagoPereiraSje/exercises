function validateNumbers(element) {
  if (!/[A-Za-z.]/.test(element.value)) {
    element.classList.remove("danger");
    document.getElementById("btPlay").disabled = false;
    document.getElementById("warnings").innerText = "";
    return;
  }

  element.classList.add("danger");
  document.getElementById("btPlay").disabled = true;
  document.getElementById("warnings").innerText = "Valores inválidos!";
}

function findWinner(smallList, bigList) {
  let i = 0;
  let even = 0;
  let odd = 0;
  let soma = [];

  for (i; i < smallList.length; i++) {
    soma.push(Number(smallList[i]) + Number(bigList[i]));
  }

  soma = soma.concat(bigList.slice(i).map((el) => Number(el)));

  soma.forEach((el) => (el % 2 == 0 ? even++ : odd++));

  let result = document.getElementById("result");

  let p1 = document.createElement("p");
  p1.append(`Soma = ${JSON.stringify(soma)}`);

  result.append(p1);

  let p2 = document.createElement("p");

  if (even > odd) {
    // Jogador 1 é o vencedor
    p2.append(`O vendedor é o PRIMEIRO com ${even} número(s) PAR(ES)!`);
    result.append(p2);
    return;
  }

  if (odd > even) {
    // Jogador 2 é o vencedor
    p2.append(`O vendedor é o SEGUNDO com ${odd} número(s) ÍMPAR(ES)!`);
    result.append(p2);
    return;
  }

  p2.append(`EMPATE. Ambos comtém ${even} número(s) PAR(ES) e ÍMPAR(ES)!`);
  result.append(p2);
}

function play() {
  const reg = /\D{1,}/;
  let p1Numbers = document.getElementById("tfPlayer1").value.split(reg);
  let p2Numbers = document.getElementById("tfPlayer2").value.split(reg);

  if (p1Numbers.length > p2Numbers.length) {
    findWinner(p2Numbers, p1Numbers);
    return;
  }

  findWinner(p1Numbers, p2Numbers);
}
