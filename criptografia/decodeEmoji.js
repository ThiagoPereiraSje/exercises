const map = {
  "π": "A",
  "π€ͺ": "M",
  "π₯Ά": "O",
  "π€": "R",
  "β€": "L",
  "β­": "U",
};

function decodeEmoji(text) {
  const resposta = [];

  for (emoji of text) {
    resposta.push(map[emoji]);
  }

  return resposta.join("");
}

const texto1 = decodeEmoji("ππ€ͺπ₯Άπ€");
console.log("ππ€ͺπ₯Άπ€ = ", texto1);

const texto2 = decodeEmoji("π€π₯Άπ€ͺπ");
console.log("π€π₯Άπ€ͺπ = ", texto2);

const texto3 = decodeEmoji("π€ͺπ₯Άβ€π");
console.log("π€ͺπ₯Άβ€π = ", texto3);

const texto4 = decodeEmoji("β€β­β€π");
console.log("β€β­β€π = ", texto4);
