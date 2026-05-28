

function getRandomMove(board){
    const empty =[];
    for (let i =0; i<board.length; i++){
        if(board[i] == " ")
        {
            empty.push(i)
        }
    }


const random ={
    Math.floor(Math.random() * empty.length)
}

// AI move
if (mode === "easy") {

   const aiIndex =
      getRandomMove(newBoard);

   // stop if undefined
   if (aiIndex !== undefined) {

      newBoard[aiIndex] = "O";

      setBoard([...newBoard]);

   }
}
return empty[random]




}
export default getRandomMove;