/*
Rotacionar
palavra: Ydprv = vamos

A = 😀, M = 🤪, O = 🥶, R = 🤖, L = ❤, U = ⭐
*/
console.log("😀".charCodeAt());

function descriptograVinegere(text, rotation) {
  const lower = text.toLowerCase();
  const rot = rotation % 26;
  const resposta = [];

  for (letra of lower) {
    const charCode = letra.charCodeAt();

    if (charCode < 97 || charCode > 122) {
      resposta.push(letra);
      continue;
    }

    let decodeChar = charCode - rot;

    if (decodeChar < 97) {
      decodeChar += 26;
    }

    resposta.push(String.fromCharCode(decodeChar));
  }

  return resposta.join("");
}

// const resposta = descriptografaCesar("Ydprv", 3);
// const resposta = descriptografaCesar("aaaa", 3);
const primeira = descriptograVinegere("Ydprv dsuhqghu fulswrjudild?", 3);
const segunda = descriptograVinegere("Ydl sud flpd ghohv Jdor!", 3);
const terceira = descriptograVinegere("Ibpr + Pbzhavqnqr = CbqPbqne", 13);
const quarta = descriptograVinegere(
  "Yrzoerz-fr qn ncerfragnpnb qr svany qr pvpyb frznan dhr irz!",
  13
);

console.log(primeira);
console.log(segunda);
console.log(terceira);
console.log(quarta);
