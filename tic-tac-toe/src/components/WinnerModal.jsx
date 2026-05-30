function WinnerModal({
   winner,
   newGame
}) {

   if (!winner) return null;

   return (

      <div className="modal-overlay">

         <div className="winner-modal">

            <h1>🏆</h1>

            <h2>
               {
                  winner === "draw"
                  ? "It's a Draw!"
                  : `${winner} Wins!`
               }
            </h2>

            <button
               onClick={newGame}
            >
               Play Again
            </button>

         </div>

      </div>

   );
}

export default WinnerModal;