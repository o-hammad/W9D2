class View {
  constructor(game, el) {
    this.game = game;
    this.grid = el;
    this.setupBoard();
  }
  
  setupBoard() {
    const container = document.querySelector('.ttt')
    let board = document.createElement("ul")
    board.addEventListener('click', this.handleClick);
    
    this.game.board.grid.forEach ((subArr, i) => {
      subArr.forEach ((el, j) => {
        let tile = document.createElement("li");
        tile.dataset.position = [i,j];  
        board.appendChild(tile);
      })
    })

    let grid = container.appendChild(board)
  }
  
  handleClick(e) {
    debugger
    let liClick = e.target;
    if (liClick.innerText === "") {
      this.makeMove(liClick);
    }
  }

  makeMove(square) {
    if (square.innerText === "") {
      square.innerText = this.game.currentPlayer;
      this.game.playMove([parseInt(square.dataset.row), parseInt(square.dataset.col)]);
    }
    if (this.game.isOver()) {
      this.handleGameOver();
    }
  }

  handleGameOver() {
    const result = this.game.winner();
    if (result) {
      alert(`${result} has won!`);
    } else {
      alert('It\'s a draw! No one wins.');
    }
  }
}

export default View;