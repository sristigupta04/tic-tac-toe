

import Navbar from "../components/Navbar";
import ModeSelector from "../components/ModeSelector";
import GameBoard from "../components/GameBoard";
import useGameLogic from "../hooks/useGameLogic";
import "../styles/app.css";
function Home() {

   const game = useGameLogic();

   return (

      <div className="home">
       
           <Navbar
            newGame={game.newGame}
            resetGame={game.resetGame}
         />

         <ModeSelector
            mode={game.mode}
            setMode={game.setMode}
         />
d
          <GameBoard
   board={game.board}
   currentPlayer={game.currentPlayer}
   handleClick={game.handleClick}
   winner={game.winner}
   score={game.score}
   winningCells={game.winningCells}
   history={game.history}
   undoMove={game.undoMove}
   newGame={game.newGame}
/>
      </div>

   );
}

export default Home;
///parent mode jo components hooks and style sabko apne pass rkahta h 
