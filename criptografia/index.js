/*
Rotacionar
palavra: Ydprv = vamos

A = 😀, M = 🤪, O = 🥶, R = 🤖, L = ❤, U = ⭐
*/
console.log("😀".charCodeAt());

function descriptograVinegere(text, rotation) {
  let lower = text.toLowerCase();
  let resposta = [];

  for (let letra of lower) {
    let v = letra.charCodeAt();

    if (v < 97 || v > 122) {
      resposta.push(letra);
      continue;
    }

    let valor = letra.charCodeAt() - rotation;

    if (valor < 97) {
      valor += 26;
    }

    resposta.push(String.fromCharCode(valor));
  }

  return resposta.join("");
}

// const resposta = descriptografaCesar("Ydprv", 3);
// const resposta = descriptografaCesar("aaaa", 3);
const primeira = descriptograVinegere("Ydprv dsuhqghu fulswrjudild", 3);
const segunda = descriptograVinegere("Ydl sud flpd ghohv Jdor", 3);
const terceira = descriptograVinegere("Ibpr + Pbzhavqnqr = CbqPbqne", 13);
const quarta = descriptograVinegere(
  "Yrzoerz-fr qn ncerfragnpnb qr svany qr pvpyb frznan dhr irz",
  13
);

console.log(primeira);
console.log(segunda);
console.log(terceira);
console.log(quarta);
