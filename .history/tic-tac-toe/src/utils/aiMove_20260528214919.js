


function getRandomMove(board){
    const empty =[];
    for (let i =0; i<board.length; i++){
        if(board[i] == " ")
        {
            empty.push(i)
        }
    }
}

const random ={
    Math.floor(Math.random() * empty.length)
}