// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

// Logic for initial world creation
class Board {
  constructor(size) {
    this.size=size;
    this.current_turn="N/A";
    this.current_phase="setup";
    this.board = this.create_board(size);
  };
  create_board(size) {
    var m = [];
    for (var i = 0; i < this.size; i++) {
      m[i] = [];
      for (var j = 0; j < this.size; j++)
        m[i][j] = "VOID";
    }
    return m;
  }
}

// Board.prototype.create_board = function (size) {
//   var m = [];
//   for (var i = 0; i < this.size; i++) {
//     m[i] = [];
//     for (var j = 0; j < this.size; j++)
//       m[i][j] = "VOID";
//   }
//   return m;
// }

// var Board = function(size) {
//   // constructor(size) {
//   this.size=size;
//   this.current_turn="N/A";
//   this.current_phase="setup";
//   this.board = this.create_board(size);
//   // };
//   // var create_board = function() {
//   // create_board(size) {
//   //   var m = [];
//   //   for (var i = 0; i < this.size; i++) {
//   //     m[i] = [];
//   //     for (var j = 0; j < this.size; j++)
//   //       m[i][j] = "VOID";
//   //   }
//   //   return m;
//   // }
// }
//
// Board.prototype.create_board = function (size) {
//   var m = [];
//   for (var i = 0; i < this.size; i++) {
//     m[i] = [];
//     for (var j = 0; j < this.size; j++)
//       m[i][j] = "VOID";
//   }
//   return m;
// }

var GRID_SIZE = 40;

// Board.void=0;
// Board.capital=1;
// Board.center=2;
// Board.water=3;
// Board.mountain=4;
// Board.Iron_Mountain=5;
// Board.Cursed_Earth=6;
// Board.Settlements=7;
// Board.Cities
// Board.Ruins
// Board.Merchant
// Board.Graveyards
// Board.Canyons
// Board.Crystal_Mines
// Board.Forests
// Board.Magic_Forests
// Board.Arable_Farmland

function Tile(row,col){
  console.log("Top",row*GRID_SIZE)
  var style = {
    top: row * GRID_SIZE,
    left: col * GRID_SIZE,
    width: GRID_SIZE,
    height: GRID_SIZE,
    border: "1px solid black",
    position: "absolute"
  }
  var classes = "tile";
  return (
    <div className={classes} style={style}></div>
  )
}

// class Tile extends React.Component{
//   constructor(props){
//     super(props)
//   }
//   render() {
//     var style = {
//       top: this.props.row * GRID_SIZE,
//       left: this.props.col * GRID_SIZE,
//       border: "1px solid black"
//     }
//     var classes = "tile";
//     return (
//       <div className={classes} style={style}></div>
//     )
//   }
// }

class BoardView extends React.Component{
  constructor(props) {
    super(props)
    this.state = {'board': this.props.board};
  }
  render() {
    var tiles = [];
    for (var i = 0; i < this.props.board.size; i ++)
      for (var j = 0; j < this.props.board.size; j++)
        tiles.push(new Tile(i,j))
        // tiles.push(new Tile({
        //   board: this.props.board,
        //   tile_base: this.props.board.board[i][j],
        //   row: i,
        //   col: j
        // }))
    var style = {
      position: "relative",
      width: this.props.board.size*GRID_SIZE,
      height: this.props.board.size*GRID_SIZE,
    }
    console.log("Tiles",tiles)
    // console.log("Grid size",GRID_SIZE)
    // console.log("this board size",this.props.board.size)
    // console.log("Width",style["width"])
    return <div style={style} id="board">{tiles}</div>;
    // return <div style={style} id="board"></div>;
  }
}

class ContainerView extends React.Component{
  constructor(props) {
    super(props)
    this.state = {'board': this.props.board};
  }
  // getInitialState() {
  //   return {'board': this.props.board};
  // }
  // onBoardUpdate() {
  //   this.setState({"board": this.props.board});
  // }
  render() {
    return (
      <div>
        <BoardView board={this.state.board}/>
      </div>
    )
  }
};

// export default ContainerView;
export { Board, ContainerView, BoardView };
// function App() {
//   return (
//     <div>
//       <BoardView board={this.state.board}/>
//     </div>
//   )
// }

// export default App;


