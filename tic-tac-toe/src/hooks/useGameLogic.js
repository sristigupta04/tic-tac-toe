import { useState, useEffect } from "react";
import {
   getRandomMove,
   getHardMove,
   Medium
} from "../utils/aiMove";

import checkWinner from "../utils/checkWinner";

function useGameLogic() {

   const [board, setBoard] = useState(
      ["", "", "", "", "", "", "", "", ""]
   );

   const [mode, setMode] = useState(() => {
      return localStorage.getItem("mode")
         || "pvp";
   });

   const [winningCells, setWinningCells] =
      useState([]);

   const [currentPlayer, setCurrentPlayer] =
      useState("X");

   const [winner, setWinner] =
      useState(null);

   const [history, setHistory] =
      useState(() => {

         const savedHistory =
            localStorage.getItem("history");

         return savedHistory
            ? JSON.parse(savedHistory)
            : [];

      });

   const [score, setscores] =
      useState(() => {

         const savedScore =
            localStorage.getItem("score");

         return savedScore
            ? JSON.parse(savedScore)
            : {
                 X: 0,
                 O: 0,
                 draw: 0
              };

      });

   const [moveHistory, setMoveHistory] =
      useState([]);

   // SAVE SCORE

   useEffect(() => {

      localStorage.setItem(
         "score",
         JSON.stringify(score)
      );

   }, [score]);

   // SAVE HISTORY

   useEffect(() => {

      localStorage.setItem(
         "history",
         JSON.stringify(history)
      );

   }, [history]);

   // SAVE MODE

   useEffect(() => {

      localStorage.setItem(
         "mode",
         mode
      );

   }, [mode]);

   const handleClick = (index) => {

      if (winner) return;

      if (board[index] !== "") return;

      setMoveHistory(prev => [
         ...prev,
         [...board]
      ]);

      const newBoard = [...board];

      // HUMAN MOVE

      newBoard[index] = currentPlayer;

      setBoard(newBoard);

      const result =
         checkWinner(newBoard);

      if (result) {

         setWinner(result.winner);

         setWinningCells(
            result.winningCells
         );

         if (
            result.winner === "X"
         ) {

            setscores({
               X: score.X + 1,
               O: score.O,
               draw: score.draw
            });

            setHistory(prev => [
               "X Won",
               ...prev
            ]);

         }

         else if (
            result.winner === "O"
         ) {

            setscores({
               X: score.X,
               O: score.O + 1,
               draw: score.draw
            });

            setHistory(prev => [
               "O Won",
               ...prev
            ]);

         }

         else if (
            result.winner === "draw"
         ) {

            setscores({
               X: score.X,
               O: score.O,
               draw: score.draw + 1
            });

            setHistory(prev => [
               "Draw",
               ...prev
            ]);

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

            aiMove =
               getRandomMove(
                  newBoard
               );

         }

         else if (
            mode === "medium"
         ) {

            aiMove =
               Medium(newBoard);

         }

         else if (
            mode === "hard"
         ) {

            aiMove =
               getHardMove(
                  newBoard
               );

         }

         if (
            aiMove !== undefined
         ) {

            newBoard[aiMove] = "O";

            setBoard([...newBoard]);

            const result2 =
               checkWinner(newBoard);

            if (result2) {

               setWinner(
                  result2.winner
               );

               setWinningCells(
                  result2.winningCells
               );

               if (
                  result2.winner === "O"
               ) {

                  setscores({
                     X: score.X,
                     O: score.O + 1,
                     draw: score.draw
                  });

                  setHistory(prev => [
                     "O Won",
                     ...prev
                  ]);

               }

               else if (
                  result2.winner ===
                  "draw"
               ) {

                  setscores({
                     X: score.X,
                     O: score.O,
                     draw:
                        score.draw + 1
                  });

                  setHistory(prev => [
                     "Draw",
                     ...prev
                  ]);

               }

            }

         }

         return;
      }

      // PVP

      setCurrentPlayer(
         currentPlayer === "X"
            ? "O"
            : "X"
      );

   };

   // UNDO

   const undoMove = () => {

      if (
         moveHistory.length === 0
      ) return;

      const lastBoard =
         moveHistory[
            moveHistory.length - 1
         ];

      setBoard(lastBoard);

      setMoveHistory(
         moveHistory.slice(0, -1)
      );

      setWinner(null);

      setWinningCells([]);

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

      setHistory([]);

   };

   return {

      board,
      currentPlayer,
      handleClick,
      winner,
      score,
      winningCells,

      history,
      undoMove,

      resetGame,
      newGame,

      mode,
      setMode

   };
}

export default useGameLogic;