let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const winners = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const resetButton = document.querySelector(".reset");
const boxes = document.querySelectorAll(".box");
const statusText = document.querySelector("#ans");

function setStatus(message) {
  statusText.textContent = message;
}

function checkWinner() {
  for (const combo of winners) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      setStatus(`Winner is: ${board[a]}`);
      gameActive = false;
      return true;
    }
  }

  if (!board.includes("")) {
    setStatus("It's a draw.");
    gameActive = false;
    return true;
  }

  return false;
}

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (!gameActive || board[index]) {
      return;
    }

    board[index] = currentPlayer;
    box.textContent = currentPlayer;

    if (checkWinner()) {
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    setStatus(`Current turn: ${currentPlayer}`);
  });
});

resetButton.addEventListener("click", () => {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  setStatus("Current turn: X");

  boxes.forEach((box) => {
    box.textContent = "";
  });
});
