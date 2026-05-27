//cell button jsiko click krne me funciton return hoga har ik chiz ka 

function Cell({
    value,
    onclick,
    isWinningCell
})
{
    return (

        <button className= { isWinningCell ?"cell winn":'cell' }
        onclick={onclick}>{value}</button>
    )

}
