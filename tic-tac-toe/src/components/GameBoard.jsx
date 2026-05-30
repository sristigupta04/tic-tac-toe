import { Cell } from "./Cell";
import Confetti from "react-confetti";
import WinnerModal from "./WinnerModal";
import { useWindowSize } from "@uidotdev/usehooks";

function GameBoard({
   board,
   currentPlayer,
   handleClick,
   winner,
   score,
   winningCells,
   newGame,
   history,
   undoMove
}) {

   const { width, height } = useWindowSize();

   return (

      <div>

         {
            winner &&
            winner !== "draw" && (
               <Confetti
                  width={width}
                  height={height}
                  recycle={false}
                  numberOfPieces={400}
               />
            )
         }

         <WinnerModal
            winner={winner}
            newGame={newGame}
         />

         <div className="scoreboard">

            <h2>Scoreboard</h2>

            <div className="score">

               <p>X : {score.X}</p>

               <p>O : {score.O}</p>

               <p>Draw : {score.draw}</p>

            </div>

         </div>

         <div className="history">

            <h2>Recent Matches</h2>

            {
               history &&
               history.map((item, index) => (

                  <p key={index}>
                     {item}
                  </p>

               ))
            }

         </div>

         {
            winner ? (

               <h2 className="current-player">
                  Winner : {winner}
               </h2>

            ) : (

               <h2 className="current-player">
                  Current Player : {currentPlayer}
               </h2>

            )
         }

         <div className="board">

            {
               board.map((cell, index) => (

                  <Cell
                     key={index}
                     value={cell}
                     onClick={() => handleClick(index)}
                     isWinningCell={
                        winningCells.includes(index)
                     }
                  />

               ))
            }

         </div>

         <div
            style={{
               marginTop: "20px",
               display: "flex",
               gap: "10px",
               justifyContent: "center"
            }}
         >

            <button
               className="reset-btn"
               onClick={undoMove}
            >
               ↩ Undo Move
            </button>

            <button
               className="reset-btn"
               onClick={newGame}
            >
               New Game
            </button>

         </div>

      </div>

   );
}

export default GameBoard;