import { useState } from "react";

import checkWinner from "../utils/checkWinner";

function useGameLogic() {

   // board state
   const [board, setBoard] = useState(
      ["", "", "", "", "", "", "", "", ""]
   );
// winig cell  coreing answer how kmuch they achieve 
const [winningCells, setWinningCells] =
   useState([]);
   // current player
   const [currentPlayer, setCurrentPlayer] =
      useState("X");

   // winner state
   const [winner, setWinner] = useState(null);
 //  score state 
  const [ score, setscores]  = useState({
   X:0,
   Y:0,
   draw:0
  })
   // click handler
   const handleClick = (index) => {
      // stop if winner exists
      if (winner) {
         return ;
      }

      // stop overwrite
      if (board[index] !== "") {
         onclick 
         return ;
      }
     
      // copy board
      const newBoard = [...board];

      // place move
      newBoard[index] = currentPlayer;

      // update board
      setBoard(newBoard);
      
      // check winner
      const result = checkWinner(newBoard);
 
      // if winner found
      if (winner.result) {

         setwinner(result.winner); 
setWinningCells(result.winningCells);

         if(result === 'X'){
           setscores({
            X:score.X +1,
            Y:score.Y,
            draw:score.draw
           }) 
         }
         else if( result === 'Y'){
            setscores((prev ) =>({
                  X:score.X,
                  Y:score.y+1,
                  draw:score.draw
            }))
         }
       else {
             setScores({
         X: scores.X,
         O: scores.O,
         draw: scores.draw + 1
      });
   }
    // switch turnno
         setCurrentPlayer(
            currentPlayer === "X" ? "O" : "X"
         );

      }
   };
   const resetGame =() =>{
      setBoard(
           ["", "", "", "", "", "", "", "", ""]
      )
      setWinner(null)

      setCurrentPlayer('X')
   }

   return {
      board,
      currentPlayer,
      handleClick,
      winner,
      score,
      winningCells,
      resetGame
   };
}

export default useGameLogic;