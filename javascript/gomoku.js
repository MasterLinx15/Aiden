const board = document.getElementById('board');
const status = document.getElementById('status');
const rows = 15;
const cols = 15;
let currentPlayer = 'X';
let gameBoard = Array(rows).fill(null).map(() => Array(cols).fill(''));

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.row = i;
    cell.dataset.col = j;
    board.appendChild(cell);
  }
}

board.addEventListener('click', (e) => {
  const cell = e.target;
  const row = cell.dataset.row;
  const col = cell.dataset.col;

  if (!cell.classList.contains('cell') || cell.classList.contains('taken')) return;

  cell.textContent = currentPlayer;
  cell.classList.add('taken');
  gameBoard[row][col] = currentPlayer;

  if (checkWin(row, col, currentPlayer)) {
    status.textContent = `Player ${currentPlayer === 'X' ? 1 : 2} wins!`;
    board.style.pointerEvents = 'none';
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  status.textContent = `Player ${currentPlayer === 'X' ? 1 : 2}'s turn (${currentPlayer})`;
});

function checkWin(row, col, player) {
  row = parseInt(row);
  col = parseInt(col);

  const directions = [
    { dr: 0, dc: 1 },
    { dr: 1, dc: 0 }, 
    { dr: 1, dc: 1 }, 
    { dr: 1, dc: -1 } 
  ];

  for (const { dr, dc } of directions) {
    let count = 1;

    for (let step = 1; step < 5; step++) {
      const r = row + dr * step;
      const c = col + dc * step;
      if (r < 0 || r >= rows || c < 0 || c >= cols || gameBoard[r][c] !== player) break;
      count++;
    }

    for (let step = 1; step < 5; step++) {
      const r = row - dr * step;
      const c = col - dc * step;
      if (r < 0 || r >= rows || c < 0 || c >= cols || gameBoard[r][c] !== player) break;
      count++;
    }

    if (count >= 5) return true;
  }

  return false;
}
