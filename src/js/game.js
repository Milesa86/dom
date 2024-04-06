export default class Game {
  constructor() {
    this.gameBoard = document.querySelector('.game-board');
  }

  createGameBoard() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        this.gameBoard.appendChild(cell);
      }
    }
  }

  startGame() {
    this.createGameBoard();
  }

  addImg() {
    const cells = this.gameBoard.querySelectorAll('.cell');
    let prevPosition = -1;
    let position;
    const goblin = document.createElement('img');
    goblin.setAttribute('src', 'https://github.com/netology-code/ahj-homeworks/raw/video/dom/pic/goblin.png');

    setInterval(() => {
      do {
        position = cells[Math.floor(Math.random() * cells.length)];
      } while (position === prevPosition);

      prevPosition = position;
      position.appendChild(goblin);
    }, 2000);
  }
}
