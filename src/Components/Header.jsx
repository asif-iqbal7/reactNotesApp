
function Header({toggleMode}){
   
    return(
        <div className="header">
            <h1>Notes</h1>
            <button
                onClick={()=>toggleMode((darkMode) => !darkMode)}>Toggle Mode</button>
        </div>
    )
}

export default Header