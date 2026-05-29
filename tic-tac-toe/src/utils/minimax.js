import checkWinner from "./checkWinner";

function minimax(board,ismax){
    const result = checkWinner(board);
    if(result){
        if(result.winner === 'O'){
            return 10;
        }
        if(result.winner === 'x'){
            return -10;
        }
        if(result.winner === 'draw')
        {
            return 0;
        }
    }


//ai is in the postioning to max 
 if(ismax){
let bestscore = -Infinity;
for(let i=0; i<board.length; i++){
    if(board[i] ===  " "){
        board[i]= 'O';
        const score = minimax(board,false);
        board[i] = " ";
        
        bestscore =  Math.max(bestscore,score);
    }else {
        let bestscore = Infinity;
        for(let i =0; i<board.length; i++){
            if(board[i] === " ") {
                board[i] = 'X';
                const score = minimax(board,true);
                board[i] = " ";
                bestscore= Math.min(bestscore,score);
            }
        }
        return bestscore;
    }
}

 }



}

export  function getBestMove(board){
    let bestscore = -Infinity;
    let bestmove;
    for(let i=0; i<board.length;i++){
        if(board[i] === " "){
        board[i] = 'O';
        const score = minimax(board,false);
        board[i] = "";
        if(score >bestscore){
            bestscore = score;
             bestmove = i;
        }
    }
}
    return bestmove;
}
 export default minimax;

































