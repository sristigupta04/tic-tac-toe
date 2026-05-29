import { useState } from "react";
import {getRandomMove , getHardMove } from "../utils/aiMove";
import checkWinner from "../utils/checkWinner";
import{Medium} from "../utils/aiMove"
import Navbar from "../components/Navbar";
function useGameLogic() {

   // board state
   const [board, setBoard] = useState(
      ["", "", "", "", "", "", "", "", ""]
   );
   //mode 
   const [mode, setMode] = useState("pvp");
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
   O:0,
   draw:0
  });
   // click handler
   const handleClick = (index) => {
      // stop if winner exists
      if (winner) {
         return ;
      }

      // stop overwrite
      if (board[index] !== "") {
         
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
      if (result) {
 setWinner(result.winner); 
setWinningCells(result.winningCells);

         if(result.winner === 'X'){
           setscores({
            X:score.X +1,
            O:score.O,
            draw:score.draw
           });
         }
         else if( result.winner === 'O'){
            setscores({
                  X:score.X,
                  O:score.O+1,
                  draw:score.draw
            })
         }
         
       else if (result.winner === "draw"){
             setscores({
         X: score.X,
         O: score.O,
         draw: score.draw + 1
      });
       
   }
   return;
      
      }
          setCurrentPlayer(
            currentPlayer === "X" ? "O" : "X"
         );

   };
//newgame 
 const newGame = () => {
   setBoard (
      ["", "", "", "", "", "", "", "", ""]
   );
   setWinner(null);
   setWinningCells([]);
   setCurrentPlayer("X");
 }


   //reset game 
   const resetGame =() =>{
      setBoard(
           ["", "", "", "", "", "", "", "", ""]
      )
      setWinner(null)
       setWinningCells([]);
      setCurrentPlayer('X');
      setscores({
      X:0,
      O:0,
      draw:0
   });
   }

   
   return {
      board,
      currentPlayer,
      handleClick,
      winner,
      score,
      winningCells,
      resetGame,
      mode,
     setMode,
     newGame
   };
}

export default useGameLogic;