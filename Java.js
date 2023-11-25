const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

// Tamanho dos blocos
const blockSize = 30;

// Matriz do jogo
const gameMatrix = [];

// Inicializa a matriz do jogo
for (let row = 0; row < 20; row++) {
    gameMatrix[row] = [];
    for (let col = 0; col < 10; col++) {
        gameMatrix[row][col] = 0;
    }
}

// Desenha o jogo
function drawGame() {
    for (let row = 0; row < 20; row++) {
        for (let col = 0; col < 10; col++) {
            if (gameMatrix[row][col] === 0) {
                context.fillStyle = 'white';
            } else {
                context.fillStyle = 'black';
            }
            context.fillRect(col * blockSize, row * blockSize, blockSize, blockSize);
            context.strokeRect(col * blockSize, row * blockSize, blockSize, blockSize);
        }
    }
}

drawGame();
