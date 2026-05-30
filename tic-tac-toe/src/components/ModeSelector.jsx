



function ModeSelector({mode,setMode}){
     return (
        <div className="mode">
            <h2>select mode </h2>
            <select  
            placeholder =" LEVELS"
            value={mode}
            onChange={(e) => setMode(e.target.value)}>
               
           <option value='pvp'>Player vs player</option>
             <option value='easy'>Easy level AI</option>
               <option value='medium'>Medium level  AI</option>
               <option value='hard'>Hard level AI </option>

           </select>
        </div>
     );
}

export default ModeSelector