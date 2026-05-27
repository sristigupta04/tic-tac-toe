

import Navbar from "../components/Navbar";
import ModeSelector from "../components/ModeSelector";
import ScoreBoard from "../components/ScoreBoard";
import GameBoard from "../components/GameBoard";
import "../styles/app.css";
function Home() {

   const scores = {
      X: 0,
      O: 0,
      draw: 0
   };

   const mode = "pvp";

   const setMode = (newMode) => {
      console.log(newMode);
   };

   return (

      <div className="home">

         <Navbar />

         <ModeSelector
            mode={mode}
            setMode={setMode}
         />

         <ScoreBoard scores={scores} />

         <GameBoard />

      </div>

   );
}

export default Home;
///parent mode jo components hooks and style sabko apne pass rkahta h 
