// ik box cell ka jo multiple box banyega 
//  jisme srif handle hoga  style 
function Cell({value,onClick}) {
        return(
            <div className="cell" onClick={onclick}>{value}</div>
        )    
}

export default Cell;