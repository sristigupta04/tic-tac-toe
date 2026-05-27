function checkWinner(board) {

   const winners = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
   ];

   for (let win of winners) {

      const [a, b, c] = win;

      if (
         board[a] &&
         board[a] === board[b] &&
         board[b] === board[c]
      ) {

         return {
         winner:board[a],
         winning:[a,b,c]
         }
      }
   }
// jagh bhar chukha h to draw
   // draw check
   if (!board.includes("")) {

      return{
         winner:'draw',
         isWinningCell:[]
      }

   }

   return null;
}

export default checkWinner;