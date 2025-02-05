const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

let clients = [];

server.on('connection', (socket) => {
    clients.push(socket);

    socket.on('message', (message) => {
        clients.forEach(client => {
            if (client !== socket && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    socket.on('close', () => {
        clients = clients.filter(client => client !== socket);
    });
});

console.log('WebSocket server started on ws://localhost:8080');


const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (cell.textContent === '') {
      cell.textContent = currentPlayer;
      checkWinner();
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  });
});

function checkWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  winPatterns.forEach(pattern => {
    const [a, b, c] = pattern;
    if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
      alert(`Player ${cells[a].textContent} wins!`);
      resetBoard();
    }
  });
}

function resetBoard() {
  cells.forEach(cell => cell.textContent = '');
}
