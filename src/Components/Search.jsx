import { FaSearch } from "react-icons/fa";

function Search({setSearchText}){
    
    return(
        <div className="search">
            <FaSearch />
            <input
                type="text"
                placeholder="Type to search..."
                onChange={(e)=>setSearchText(e.target.value)}
                />
        </div>
    )
}

export default Search