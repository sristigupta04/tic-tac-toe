import { useState } from "react";
import { getRandomMove, getHardMove, Medium } from "../utils/aiMove";
import checkWinner from "../utils/checkWinner";

function useGameLogic() {

   // board state
   const [board, setBoard] = useState(
      ["", "", "", "", "", "", "", "", ""]
   );

   // mode state
   const [mode, setMode] = useState("pvp");

   // winning cells
   const [winningCells, setWinningCells] =
      useState([]);

   // current player
   const [currentPlayer, setCurrentPlayer] =
      useState("X");

   // winner
   const [winner, setWinner] = useState(null);

   // score
   const [score, setscores] = useState({
      X: 0,
      O: 0,
      draw: 0
   });

   const handleClick = (index) => {

      if (winner) return;

      if (board[index] !== "") return;

      const newBoard = [...board];

      // HUMAN MOVE
      newBoard[index] = currentPlayer;

      setBoard(newBoard);

      let result = checkWinner(newBoard);

      if (result) {

         setWinner(result.winner);
         setWinningCells(result.winningCells);

         if (result.winner === "X") {

            setscores({
               X: score.X + 1,
               O: score.O,
               draw: score.draw
            });

         }

         else if (result.winner === "O") {

            setscores({
               X: score.X,
               O: score.O + 1,
               draw: score.draw
            });

         }

         else if (result.winner === "draw") {

            setscores({
               X: score.X,
               O: score.O,
               draw: score.draw + 1
            });

         }

         return;
      }

      // AI MODES
      if (
         mode === "easy" ||
         mode === "medium" ||
         mode === "hard"
      ) {

         let aiMove;

         if (mode === "easy") {
            aiMove = getRandomMove(newBoard);
         }

         else if (mode === "medium") {
            aiMove = Medium(newBoard);
         }

         else if (mode === "hard") {
            aiMove = getHardMove(newBoard);
         }

         if (aiMove !== undefined) {

            newBoard[aiMove] = "O";

            setBoard([...newBoard]);

            const result2 =
               checkWinner(newBoard);

            if (result2) {

               setWinner(result2.winner);

               setWinningCells(
                  result2.winningCells
               );

               if (result2.winner === "O") {

                  setscores({
                     X: score.X,
                     O: score.O + 1,
                     draw: score.draw
                  });

               }

               else if (
                  result2.winner === "draw"
               ) {

                  setscores({
                     X: score.X,
                     O: score.O,
                     draw: score.draw + 1
                  });

               }

            }

         }

         return;
      }

      // PVP MODE ONLY
      setCurrentPlayer(
         currentPlayer === "X"
            ? "O"
            : "X"
      );
   };

   // NEW GAME
   const newGame = () => {

      setBoard(
         ["", "", "", "", "", "", "", "", ""]
      );

      setWinner(null);

      setWinningCells([]);

      setCurrentPlayer("X");
   };

   // RESET GAME
   const resetGame = () => {

      setBoard(
         ["", "", "", "", "", "", "", "", ""]
      );

      setWinner(null);

      setWinningCells([]);

      setCurrentPlayer("X");

      setscores({
         X: 0,
         O: 0,
         draw: 0
      });
   };

   return {
      board,
      currentPlayer,
      handleClick,
      winner,
      score,
      winningCells,
      resetGame,
      newGame,
      mode,
      setMode
   };
}

export default useGameLogic;