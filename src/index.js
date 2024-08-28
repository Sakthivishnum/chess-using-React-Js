import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function Chessboard() {
  const boardData = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
  ];

  const renderSquare = (row, col) => {
    const isLightSquare = (row + col) % 2 === 0;
    const piece = boardData[row][col];
    return (
      <td key={`${row}-${col}`} className={isLightSquare ? 'light' : 'dark'}>
        {piece}
      </td>
    );
  };

  return (
    <div className="chessboard">
      <table>
        <tbody>
          {boardData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <th>{8 - rowIndex}</th>
              {row.map((piece, colIndex) => renderSquare(rowIndex, colIndex))}
              <th>{8 - rowIndex}</th>
            </tr>
          ))}
          <tr>
            <th></th>
            <th>a</th>
            <th>b</th>
            <th>c</th>
            <th>d</th>
            <th>e</th>
            <th>f</th>
            <th>g</th>
            <th>h</th>
            <th></th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

ReactDOM.render(<Chessboard />, document.getElementById('root'));