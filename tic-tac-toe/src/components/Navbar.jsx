


function Navbar({
     resetGame,
   newGame
}) {
return (
    <nav className="navbar">
        <h1 className="logo"> TIC TAC TOE</h1>
        <div className="nav-buttons">
            <button onClick={newGame}> New Game</button>
            <button onClick={resetGame}>Reset Game</button>
        </div>
    </nav>
)
}

export default Navbar;