// components/Board.tsx
"use client";

import React, { useEffect } from 'react';
import { GameState, makeMove, aiMove } from '../utils/game';

interface BoardProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}


const Board: React.FC<BoardProps> = ({ gameState, setGameState }) => {
  
  const handleClick = (index: number) => {
    if (gameState.board[index] === null && gameState.winner === null) {
      const updatedGameState = makeMove(gameState, index);
      setGameState(updatedGameState);
    }
  };

  useEffect(() => {
    if (gameState.currentPlayer === 'O' && !gameState.winner) {
      const updatedGameState = aiMove(gameState);
      setGameState(updatedGameState);
    }
  }, [gameState, setGameState]);

  return (
    
    <div className="board">
        
      {gameState.board.map((_, index) => (
        <button key={index} className="square" onClick={() => handleClick(index)} disabled={gameState.board[index] !== null}>
          {gameState.board[index]}
        </button>
      ))}
    </div>
    
  );
};



export default Board;
