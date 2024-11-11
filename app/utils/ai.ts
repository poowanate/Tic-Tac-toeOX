// utils/ai.ts

const AI_PLAYER: 'O' = 'O';
const HUMAN_PLAYER: 'X' = 'X';
const EMPTY: null = null;

export const getAvailableMoves = (board: (string | null)[]): number[] =>
  board.map((cell, index) => (cell === null ? index : -1)).filter((index) => index !== -1);

const minimax = (board: (string | null)[], depth: number, isMaximizing: boolean): number => {
  const winner = calculateWinner(board);
  if (winner === AI_PLAYER) return 10 - depth;
  if (winner === HUMAN_PLAYER) return depth - 10;
  if (getAvailableMoves(board).length === 0) return 0;

  let bestScore = isMaximizing ? -Infinity : Infinity;
  for (const move of getAvailableMoves(board)) {
    board[move] = isMaximizing ? AI_PLAYER : HUMAN_PLAYER;
    const score = minimax(board, depth + 1, !isMaximizing);
    board[move] = EMPTY;
    bestScore = isMaximizing ? Math.max(score, bestScore) : Math.min(score, bestScore);
  }
  return bestScore;
};


//boteasy
export const getBestMove = (board: (string | null)[]): number => {
    const availableMoves = getAvailableMoves(board);
    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    return availableMoves[randomIndex];
};
//bothard
// export const getBestMove = (board: (string | null)[]): number => {
//   let bestMove = { index: -1, score: -Infinity };
//   for (const move of getAvailableMoves(board)) {
//     board[move] = AI_PLAYER;
//     const score = minimax(board, 0, false);
//     board[move] = EMPTY;
//     if (score > bestMove.score) bestMove = { index: move, score };
//   }
//   return bestMove.index;
// };

export const calculateWinner = (board: (string | null)[]): string | null => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ];
  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};
