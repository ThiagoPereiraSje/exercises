function initializeBoard() {
  const board = [];
  for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
      row.push(" ");
    }
    board.push(row);
  }
  return board;
}

/*
__|__|__
__|__|__
  |  |
*/

function isValidMovement(i, j, board) {
  if (i >= 0 && i <= 2 && j >= 0 && j <= 2) {
    return board[i][j] == " ";
  }

  return false;
}

/*
__|__|__
__|__|__
  |  |
*/

// Completar a linha na horizontal, vertical ou diagonal
// i linha
// j coluna

function getWinner(board) {
  for (let i = 0; i < 3; i++) {
    let valorPrimeiro = board[i][0];
    let valido = true;

    for (let j = 0; j < 3; j++) {
      if (board[i][j] != valorPrimeiro) {
        valido = false;
      }
    }

    if (valido && valorPrimeiro != " ") return valorPrimeiro;
  }

  for (let j = 0; j < 3; j++) {
    let valorPrimeiro = board[0][j];
    let valido = true;

    for (let i = 0; i < 3; i++) {
      if (board[i][j] != valorPrimeiro) {
        valido = false;
      }
    }

    if (valido && valorPrimeiro != " ") return valorPrimeiro;
  }

  let valorPrimeiro = board[0][0];
  let valido = true;

  for (let i = 0; i < 3; i++) {
    if (board[i][i] != valorPrimeiro) {
      valido = false;
    }
  }

  if (valido && valorPrimeiro != " ") return valorPrimeiro;

  valorPrimeiro = board[0][2];
  valido = true;

  for (let i = 0; i < 3; i++) {
    if (board[i][2 - i] != valorPrimeiro) {
      valido = false;
    }
  }

  if (valido && valorPrimeiro != " ") return valorPrimeiro;

  return " ";
}

/*
x|__|__
__|__|__
  |  |
*/

var p = 0;
const positions = [
  [0, 0],
  [0, 2],
  [0, 1],
  [1, 0],
  [1, 2],
  [1, 1],
  [2, 0],
  [2, 2],
  [2, 1],
];

function getNextPosition() {
  const n = positions[p];
  p++;
  return n;
}

function printBoard(board) {
  s = "";
  for (let row of board) {
    s += row.join(",") + "\n";
  }
  console.log(s);
}

function playRound(round, board) {
  let [i, j] = getNextPosition();
  while (!isValidMovement(i, j, board)) {
    [i, j] = getNextPosition();
  }
  const player = round % 2 == 0 ? "X" : "O";
  board[i][j] = player;
  console.log("round: " + i);
  printBoard(board);
  return getWinner(board);
}

function play() {
  const board = initializeBoard();
  let winner = " ";
  for (let i = 0; i < 9; i++) {
    winner = playRound(i, board);
    if (winner != " ") {
      break;
    }
  }
  if (winner == " ") {
    console.log("draw");
  } else {
    console.log("winner is: " + winner);
  }
}

play();
