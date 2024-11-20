document.addEventListener("DOMContentLoaded", () => {
    const boardSize = 5;
    let board = [];
    const gameBoard = document.getElementById("game-board");
    const newGameButton = document.getElementById("new-game");

    // Create board
    function createBoard() {
        gameBoard.innerHTML = ""; // Clear existing board
        board = [];
        for (let row = 0; row < boardSize; row++) {
            board[row] = [];
            for (let col = 0; col < boardSize; col++) {
                const tile = document.createElement("div");
                tile.classList.add("tile");
                tile.dataset.row = row;
                tile.dataset.col = col;
                tile.addEventListener("click", () => toggleTiles(row, col));
                gameBoard.appendChild(tile);
                board[row][col] = tile;
            }
        }
    }

    // Toggle a tile and its neighbors
    function toggleTiles(row, col) {
        const positions = [
            [0, 0], [0, -1], [0, 1], [-1, 0], [1, 0]
        ];
        positions.forEach(([dx, dy]) => {
            const newRow = row + dx;
            const newCol = col + dy;
            if (board[newRow]?.[newCol]) {
                board[newRow][newCol].classList.toggle("is-off");
            }
        });
        checkWin();
    }

    // Check if all tiles are white
    function checkWin() {
        const allOff = board.every(row =>
            row.every(tile => tile.classList.contains("is-off"))
        );
        if (allOff) {
            window.alert("You win!");
        }
    }

    // Randomly click tiles to generate a solvable board
    function randomizeBoard() {
        const randomClicks = Math.floor(Math.random() * 10 + 5);
        for (let i = 0; i < randomClicks; i++) {
            const randomRow = Math.floor(Math.random() * boardSize);
            const randomCol = Math.floor(Math.random() * boardSize);
            toggleTiles(randomRow, randomCol);
        }
    }

    // Start a new game
    function startNewGame() {
        createBoard();
        randomizeBoard();
    }

    // Initialize the game
    newGameButton.addEventListener("click", startNewGame);
    startNewGame();
});
