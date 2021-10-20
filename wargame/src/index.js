import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Board, ContainerView, BoardView, CharSheetView } from './App';
import reportWebVitals from './reportWebVitals';

var board = new Board(15);
console.log("Board class",Board)
console.log("Board size at index.js", board.size)
console.log("Board object",board)
console.log("BoardView", BoardView)
console.log(<BoardView board={board}/>)
ReactDOM.render(
  <BoardView board={board} />,
  document.getElementById('main')
);
ReactDOM.render(
  <CharSheetView status="blank" />,
  document.getElementById('charsheet')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
