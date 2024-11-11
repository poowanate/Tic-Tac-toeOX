// utils/game.ts

import { getBestMove, calculateWinner } from './ai';

export type GameState = {
  board: (string | null)[];
  currentPlayer: 'X' | 'O';
  winner: string | null;
  isDraw: boolean;
};

const initialState: GameState = { board: Array(9).fill(null), currentPlayer: 'X', winner: null, isDraw: false };

export const makeMove = (gameState: GameState, index: number): GameState => {
  if (gameState.board[index] !== null || gameState.winner) return gameState;
  const newBoard = [...gameState.board];
  newBoard[index] = gameState.currentPlayer;
  const winner = calculateWinner(newBoard);
  
  const isDraw = !winner && newBoard.every(cell => cell !== null);
  return {
    board: newBoard,
    currentPlayer: gameState.currentPlayer === 'X' ? 'O' : 'X',
    winner: winner,
    isDraw: isDraw,
  };
};

export const aiMove = (gameState: GameState): GameState => {
  const aiMoveIndex = getBestMove(gameState.board);
  return makeMove(gameState, aiMoveIndex);
};

export default initialState;
