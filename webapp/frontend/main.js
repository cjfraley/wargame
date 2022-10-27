// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// function init() {}
// init();
// const a = 2 * Math.PI / 6;
// const r = 30;
//
// // // 1st
// // x = r;
// // y = r;
// // drawHexagon(x, y);
// //
// // // 2nd
// // x = x + r + r * Math.cos(a);
// // y = y + r * Math.sin(a);
// // drawHexagon(x, y);
// //
// // // 3rd
// // x = x + r + r * Math.cos(a);
// // y = y - r * Math.sin(a);
// // drawHexagon(x, y);
// //
// // // 4th
// // x = x + r + r * Math.cos(a);
// // y = y + r * Math.sin(a);
// // drawHexagon(x, y);
//
// function drawWedge(x,y) {
//   // var row = 5;
//   for (var row = 0; row<5; row++){
//     for (var hex_num=0;hex_num<row;hex_num++){
//       drawHexagon(
//         x+(hex_num*2+1+5-row)*Math.cos(Math.PI/6)*r,
//         y-r*(1+Math.sin(Math.PI/6))*row
//       );
//     }
//   }
// }
//
// // drawWedge(0,500)
// function fullBoard(x,y) {
//   for (var row = 0; row<11; row++){
//     for (var hex_num = 0; hex_num<(11-Math.abs(row-5)); hex_num++){
//       drawHexagon(
//         // x+(hex_num*2+1+5-row)*Math.cos(Math.PI/6)*r,
//         x+(hex_num*2+Math.abs(row-5))*Math.cos(Math.PI/6)*r,
//         y-r*(1+Math.sin(Math.PI/6))*row
//       );
//     }
//   }
// }
// fullBoard(100,500)

// Here up is a hacky way of drawing the board


// TODO refactor building the board
// 1. Define grid
// 2. Define used hexes

function createBoard() {
  gameBoard.start();
  initializeGrid(gameBoard);
}

function drawHexagon(x, y, r, style) {
  gameBoard.context.beginPath();
  for (var i = 0; i < 6; i++) {
    gameBoard.context.lineTo(
      x + r * Math.cos(Math.PI * (i/3 +1/2)),
      y + r * Math.sin(Math.PI * (i/3 +1/2))
    );
  }
  gameBoard.context.closePath();
  gameBoard.context.stroke();
}

function initializeGrid(context) {
  r=Math.min(
    context.canvas.width/24,
    context.canvas.height/24,
    );
  console.log("radius: ",r)
  for (var row = 0; row<12; row++){
    for (var col=0;col<12;col++){
      drawHexagon(
        (col*2+row%2)*Math.cos(Math.PI/6)*r,
        r*(1+Math.sin(Math.PI/6))*row,
        r,
        "grey-dash"
      );
    }
  }
}

var gameBoard = {
  canvas : document.createElement("canvas"),
  boardState: {},
  start: function() {
    this.canvas.width = window.innerWidth; // 1000; //100%;
    this.canvas.height = window.innerHeight*.7; //70%;
    this.context = this.canvas.getContext("2d");
    document.getElementById("gameArea").appendChild(this.canvas);
    this.context
  }
}
// function startGame() {
//   gameArea.start()
//   addChar()
// }
//
// function addChar() {
//   ctx =
// }
