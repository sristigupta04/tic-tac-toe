//cell button jsiko click krne me funciton return hoga har ik chiz ka 

 export function Cell({
    value,
    onclick,
    isWinningCell
})
{
    return (

        <button className= { isWinningCell ?"cell winn":'cell' }
        onClick={onclick}>{value}</button>
    )

}
