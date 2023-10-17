import View from "./ttt-view";
import Game from "/ttt_node/game";

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  let game = new Game();
  const container = document.querySelector('.ttt');
  let view = new View(game, container);
});