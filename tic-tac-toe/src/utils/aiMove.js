import checkWinner from './checkWinner';
import { getBestMove } from "./minimax";
export function getRandomMove(board){
    const empty =[];
    for (let i =0; i<board.length; i++){
        if(board[i] === "")
        {
            empty.push(i)
        }
    }


const random= 
    Math.floor(Math.random() * empty.length)


return empty[random]
}

 export function getHardMove(board) {
   return getBestMove(board);
}


export function Medium(board){
    for (let i=0; i<board.length; i++){
        if(board[i] === ""){
            const temp = [...board];
            temp[i] = 'O';
            const result = checkWinner(temp);
            if(result&& result.winner === 'O')
            {
                return i;
            }
        }
    }



for(let i=0;i<board.length; i++){
    if(board[i] == ""){
        const temp = [... board]
        temp[i] = 'X';
        const result = checkWinner(temp);
        if(result && result.winner === 'X')
        {
            return i;
        }
    }
}


return getRandomMove(board);
}
