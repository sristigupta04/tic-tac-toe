import Cell from "./Cell";
import Scoreboard from "./Scoreboard";
import Navbar from "./Navbar";
import ModeSelector from "./ModeSelector";
//this contain the board logic 
//ye kaise  konse index pr jayega 

 function Gameboard() {
 const board = ["", "", "", "", "", "", "", "", ""];
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
  <div className="conatiner">
   
    <Navbar/>
    <div className="board">

         <ModeSelector
            mode={mode}
            setMode={setMode}
         />

               <Scoreboard scores={scores} />

        {
            board.map((cell ,index ) => {
          <button  key = {index} className="cell" onclick={(e) =>
                     console.log(index)
          }>  </button>

            }
        )
        }
    </div></div>
 )
}

export default Gameboard;