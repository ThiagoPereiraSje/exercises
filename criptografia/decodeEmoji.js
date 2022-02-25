const map = {
  "😀": "A",
  "🤪": "M",
  "🥶": "O",
  "🤖": "R",
  "❤": "L",
  "⭐": "U",
};

function decodeEmoji(text) {
  const resposta = [];

  for (emoji of text) {
    resposta.push(map[emoji]);
  }

  return resposta.join("");
}

const texto1 = decodeEmoji("😀🤪🥶🤖");
console.log("😀🤪🥶🤖 = ", texto1);

const texto2 = decodeEmoji("🤖🥶🤪😀");
console.log("🤖🥶🤪😀 = ", texto2);

const texto3 = decodeEmoji("🤪🥶❤😀");
console.log("🤪🥶❤😀 = ", texto3);

const texto4 = decodeEmoji("❤⭐❤😀");
console.log("❤⭐❤😀 = ", texto4);
