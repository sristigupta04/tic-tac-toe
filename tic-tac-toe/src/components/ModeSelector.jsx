



function ModeSelector({mode,setMode}){
     return (
        <div className="mode">
            <h2>select mode </h2>
            <select 
            value={mode}
            onChange={(e)>setMode(e.target.value)}>

           <option value='pvp'>Player vs player</option>
             <option value='easy'>Easy ai</option>
               <option value='hard'>superr hard </option>
           </select>
        </div>
     );
}

export default ModeSelector