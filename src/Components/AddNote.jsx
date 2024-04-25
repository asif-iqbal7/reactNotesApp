import { useState } from "react"

function AddNote({addNewNotes}){

    const [text, setText] = useState('');

    const characterLimit = 200;

    const handleChange = (e) => {
        if(characterLimit - e.target.value.length >= 0)
        {
           setText(e.target.value);
        }
    };

    const handleClick = () =>{
       if( text.trim().length > 0){
        addNewNotes(text);
       } 
        setText('');
        document.getElementById("output").value = "";
    };
    
    return(
        
        <div className="note addnote-bg-color">
            <textarea
                id = 'output'
                maxLength='200'
                rows='8'
                cols='10'
                placeholder="Type to add a note..."
                onChange = {handleChange}
                vlaue = {text}
            ></textarea>
            <div className="note-footer">
                <p>{characterLimit - text.length} Remaining</p>
                <button
                    onClick = {handleClick}
                >Save</button>
            </div>
        </div>   
)
}

export default AddNote