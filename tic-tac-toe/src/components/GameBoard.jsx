import Cell from "./Cell";
import Scoreboard from "./ScoreBoard";


//this contain the board logic 
//ye kaise  konse index pr jayega 

 function Gameboard() {
 const board = ["", "", "", "", "", "", "", "", ""];
 const scores = {
      X: 0,
      O: 0,
      draw: 0
   };
 return (
    <div className="board">
               <ScoreBoard scores={scores} />

        {
            board.map((cell ,index ) => {
          <button  key = {index} className="cell" onclick={() =>
                     console.log(index)
          }>  </button>

            }
        )
        }
    </div>
 )
}

export default Gameboard;