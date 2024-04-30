let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

function cellClicked(index) {
  if (gameActive && board[index] === "") {
    board[index] = currentPlayer;
    document.getElementById("board").children[index].textContent = currentPlayer;
    if (checkWin() || checkDraw()) {
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let condition of winConditions) {
    let [a, b, c] = condition;
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      document.getElementById("message").textContent = `${currentPlayer} wins!`;
      return true;
    }
  }
  return false;
}

function checkDraw() {
  if (!board.includes("")) {
    document.getElementById("message").textContent = "It's a draw!";
    return true;
  }
  return false;
}

function restart() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  document.getElementById("message").textContent = "";
  Array.from(document.getElementById("board").children).forEach((cell, index) => {
    cell.textContent = "";
  });
}
