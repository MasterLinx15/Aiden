let currentPlayer = 'green'



const grid = document.createElement('div');
grid.style.display = 'grid';
grid.style.gridTemplateColumns = 'repeat(19, 1fr)';
grid.style.gridTemplateRows = 'repeat(19, 1fr)';
grid.style.gap = '1px';
grid.style.width = '500px';
grid.style.height = '500px';
grid.style.margin = 'auto';

for(let i = 0; i < 19 * 19; i++){
    const cell = document.createElement('div');
   cell.addEventListener('click', () => {
        cell.style.backgroundColor = 'green'
    });
    cell.style.backgroundColor = '#f0f0f0';
    cell.style.border = '1px solid #ccc';
    grid.appendChild(cell);
}

document.body.appendChild(grid);