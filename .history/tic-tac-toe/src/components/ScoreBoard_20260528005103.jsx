function Scoreboard({scores}) {
    return (
        <div className="scoreboard" >
       <div className="score">
        <p> player X : {scores.X}</p>
          <p> player Y : {scores.Y}</p>
            <p> Draw : {scores.draw}</p>
       </div>
        </div> 
          
        
    )
}

export default Scoreboard;


//YE WLAA COMPONENTS YE DIKHA RHA H KI SCORE Sabko kita aya 