import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
// Logic for initial world creation

var Board = function(size) {
  this.size=size;
  this.current_turn="N/A";
  this.current_phase="setup";
  this.board = this.create_board(size)
}

var GRID_SIZE = 40;

Board.void=0;
Board.capital=1;
Board.center=2;
Board.water=3;
Board.mountain=4;
Board.Iron_Mountain=5;
Board.Cursed_Earth=6;
Board.Settlements=7;
// Board.Cities
// Board.Ruins
// Board.Merchant
// Board.Graveyards
// Board.Canyons
// Board.Crystal_Mines
// Board.Forests
// Board.Magic_Forests
// Board.Arable_Farmland

Board.prototype.create_board=function(size) {
  var m = [];
  for (var i = 0; i < size; i++) {
    m[i] = [];
    for (var j = 0; j < size; j++)
      m[i][j] = Board.void;
  }
  return m;
}

class Tile extends React.Component{
  render() {
    var style = {
      top: this.props.row * GRID_SIZE,
      left: this.props.col * GRID_SIZE
    }
    var classes = "tile";
    return (
      <div className={classes} style={style}></div>
    )
  }
}

class BoardView extends React.Component{
  render() {
    var tiles = [];
    for (var i = 0; i < this.props.board.size; i ++)
      for (var j = 0; j < this.props.board.size; j++)
        tiles.push(new Tile({
          board: this.props.board,
          tile_base: this.props.board.board[i][j],
          row: i,
          col: j
        }))
    var style = {
      width: this.props.board.size*GRID_SIZE,
      height: this.props.board.size*GRID_SIZE,
    }
    return <div style={style} id="board">{tiles}</div>;
  }
}

class ContainerView extends React.Component{
  constructor(props) {
    super(props)
    this.state = {'board': this.props.board};
  }
  getInitialState() {
    return {'board': this.props.board};
  }
  onBoardUpdate() {
    this.setState({"board": this.props.board});
  }
  render() {
    return (
      <div>
        <BoardView board={this.state.board}
          onPlay={this.onBoardUpdate.bind(this)} />
      </div>
    )
  }
};

var board = new Board(19);

ReactDOM.render(
  <ContainerView board={board} />,
  document.getElementById('main')
);