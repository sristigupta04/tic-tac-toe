import Cell from "./Cell";

import useGameLogic from "../hooks/useGameLogic";

function GameBoard() {

   const {
      board,
      currentPlayer,
      handleClick,
      winner,
      score,
   winningCells,
   resetGame
   } = useGameLogic();

   return (

      <div>

<div className="scoreboard">
   <h2> scoreboard</h2>
   <div className="score">
         <p>X : {scores.X}</p>

               <p>O : {scores.O}</p>

               <p>Draw : {scores.draw}</p>

   </div>
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
                  />

               ))
            }
        
         </div>
             <button
            className="reset-btn"
            onClick={resetGame}
         >
            Reset Game
         </button>


      </div>

   );
}

export default GameBoard;