// Core game logic for Flappy Bird
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 600;

// Variables
let birdX = 50;
let birdY = 150;
const birdWidth = 20;
const birdHeight = 20;
const gravity = 2;
let birdVelocity = 0;
let gameActive = false;
let score = 0;

// Initialize Game
const startGameBtn = document.getElementById('startGame');
const scoreDisplay = document.getElementById('score');

startGameBtn.addEventListener('click', startGame);

function startGame() {
    gameActive = true;
    birdVelocity = 0;
    birdY = 150;
    score = 0;
    startGameBtn.style.display = 'none';
    drawGame();
}

// Draw Game Loop
function drawGame() {
    if (!gameActive) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw bird
    ctx.fillStyle = 'yellow';
    ctx.fillRect(birdX, birdY, birdWidth, birdHeight);

    // Gravity
    birdVelocity += gravity * 0.1;
    birdY += birdVelocity;

    // Check boundaries
    if (birdY + birdHeight >= canvas.height || birdY <= 0) {
        gameOver();
    }

    scoreDisplay.textContent = score;

    requestAnimationFrame(drawGame);
}

function gameOver() {
    gameActive = false;
    startGameBtn.style.display = 'block';
    alert('Game Over! Your score: ' + score);
}

// Bird Flap
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && gameActive) {
        birdVelocity = -5;
    }
});
