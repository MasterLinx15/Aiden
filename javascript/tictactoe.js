document.getElementById('play-button').addEventListener('click', () => {
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('game-board').classList.remove('hidden');
  });
  
  const cells = document.querySelectorAll('.cell');
  let currentPlayer = 'X';
  let boardState = Array(9).fill(null);
  
  cells.forEach(cell => {
    cell.addEventListener('click', () => {
      const index = cell.getAttribute('data-index');
      if (!boardState[index]) {
        boardState[index] = currentPlayer;
        cell.textContent = currentPlayer;
        if (checkWin(currentPlayer)) {
          alert(`${currentPlayer} wins!`);
          resetGame();
        } else if (boardState.every(cell => cell !== null)) {
          alert("Tie!");
          resetGame();
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    });
  });
  
  document.getElementById('reset-button').addEventListener('click', resetGame);
  
  function resetGame() {
    boardState.fill(null);
    cells.forEach(cell => {
      cell.textContent = '';
    });
    currentPlayer = 'X';
  }
  
  function checkWin(player) {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    return winningCombinations.some(combination => {
      return combination.every(index => boardState[index] === player);
    });
  }