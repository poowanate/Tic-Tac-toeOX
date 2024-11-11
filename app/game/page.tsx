"use client"
import { useState, useEffect } from 'react';


// การคำนวณหา winner
const checkWinner = (board) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6], // Diagonals
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
};

// การเลือก AI แบบง่ายๆ
const aiMove = (board) => {
  const availableMoves = board.map((value, index) => value === null ? index : null).filter(value => value !== null);
  return availableMoves[Math.floor(Math.random() * availableMoves.length)];
};



export default  function Home() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');  // 'X' is player, 'O' is AI
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState(null);
  const [Resetbutton, setResetbutton] = useState(false);
  // const [streak, setStreak] = useState(0);  // การชนะติดต่อกัน
  const [lastWinner, setLastWinner] = useState(null);  // เก็บผู้ชนะล่าสุด

  const handleClick = (index) => {
    if (board[index] || winner) return;  // ไม่สามารถกดซ้ำหรือตอนที่มีผู้ชนะแล้ว

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      handleWin(gameWinner);
      
    }else if(!newBoard.includes(null))
      { //draw
      setResetbutton(!Resetbutton)

      }
     else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      
    }
    
  };

  const handleWin = (gameWinner) => {
   
    setLastWinner(gameWinner);

  
    setWinner(gameWinner);

    // ส่งข้อมูลไปยัง API เพื่ออัปเดตคะแนน
    
    updateScore(gameWinner);
    fetchMyAPI()
    setResetbutton(!Resetbutton)
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer('X');
    setResetbutton(!Resetbutton)
  };

  const updateScore = async (data) => {
   
    const response = await fetch('/api/score', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ winner: data }), // ตัวอย่างข้อมูล
    });
  
    if (response.ok) {
      const data = await response.json();
      console.log('Response from API:', data);
    } else {
      console.error('Error in POST request');
    }
  };
  async function fetchMyAPI() {
    const res = await fetch('/api/score');
    const posts = await res.json();
   
  
    //  console.log(posts)
    setScore(posts)
     console.log(score)
    
  }
  const [data, setData] = useState([]);
  // AI เล่น
  useEffect(()=> {

    

    fetchMyAPI()

   
    
    if (currentPlayer === 'O' && !winner) {
      const aiIndex = aiMove(board);
      const newBoard = [...board];
      newBoard[aiIndex] = 'O';
      setBoard(newBoard);

      const gameWinner = checkWinner(newBoard);
      if (gameWinner) {
        handleWin(gameWinner);
      } else {
        setCurrentPlayer('X');
      }
    }
  }, [currentPlayer, board, winner]);
  if (!score) return <div>Loading...</div>;
  return (
    <div className="game">
      
      <h1 className="mb-2 text-2xl text-center   font-extrabold">Tic Tac Toe - Player vs AI</h1>
    
    
     
       <div className=''>
            
          
            <div className="mt-6   left-5 place-self-center w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-50 dark:border-gray-300" id="stats" role="tabpanel" aria-labelledby="stats-tab">
            <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-2xl  font-extrabold">คะแนน</dt>
                   
                </div>
            <div className='grid  grid-cols-2 px-2 py-6 rounded-md'>
              
            <div className="flex  flex-col items-center justify-center">
                    <dt className="mb-2 text-2xl text-left   font-extrabold">Player</dt>
                    <dd className="text-blue-500 text-3xl ">{score.score.player}</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-2xl  font-extrabold">AI</dt>
                    <dd className="text-red-500 text-3xl ">{score.score.ai}</dd>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-2xl  font-extrabold">ผู้เล่นชนะต่อเนื่อง</dt>
                    <dd className="text-green-500 text-3xl ">{score.streaks.player}</dd>
                </div>
           
        </div>
      
        {/* <p>Player: {score.streaks.player} | AI: {score.ai}</p> */}
        {/* <p>Streak: {streak}</p> */}
      
      <div className="board ">
        {[...Array(9)].map((_, index) => (
          <div key={index} className="square-container">
            <button className="square" onClick={() => handleClick(index)} disabled={board[index] || winner}>
              {board[index]}
            </button>
          </div>
        ))}
      </div>
      </div>
      {/* <h2>{winner === 'Draw' ? 'It\'s a Draw!' : `${winner} Wins!`}</h2>
      {winner && <h2>Winner: {winner}</h2>} */}
       {winner ? (
          <h2>{winner === 'Draw' ? 'It\'s a Draw!' : `${winner} Wins!`}</h2>
        ) : (
          <></>
        )}
      {Resetbutton ? <button className="reset" onClick={resetGame}>Reset Game</button> : <></>}
      
    </div>
  );
}
