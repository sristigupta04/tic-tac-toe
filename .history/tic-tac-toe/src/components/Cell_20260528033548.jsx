//cell button jsiko click krne me funciton return hoga har ik chiz ka 

 export function Cell({
    value,
    onClick,
    isWinningCell
})
{
    return (

        <button className= { isWinningCell ?"cell winn":'cell' }
        onClick={onClick}>{value}</button>
    )

}
