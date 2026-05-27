// ik box cell ka jo multiple box banyega 
//  jisme srif handle hoga  style 
function Cell({value,onClick}) {
        return(
            <button  className="cell" onClick={onclick}>{value}</button>
        )    
}

export default Cell;

// gameboard -> passeess-> cell s