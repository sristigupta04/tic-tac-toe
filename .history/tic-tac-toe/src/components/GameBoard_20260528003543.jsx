// this contain only board layout logic and style 
 function Component() {

const data =[]
  const winners = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
   ];
  return (
    <div>
  for (let combo of winners){
    combo = [a , b, c]
    if(

        board[a]  && board [a] === board[b]  && board[b] === board[c]
    )
    {
        return board[a]
    }
  }
    </div>
  )

  function GAME() {
const board =['','','','','','',
'',',']
return(
    <div className="board">

        board.map((cell,index)  {

              <button key={index}>{cell}</button>

  })
    </div>
)
}
 }
 