import Cell from "./Cell";
import Scoreboard from "./ScoreBoard";


//this contain the board logic 
//ye kaise  konse index pr jayega 

 function Gameboard() {
 const board = ["", "", "", "", "", "", "", "", ""];
 return (
    <div className="board">
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