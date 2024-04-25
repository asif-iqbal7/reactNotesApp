import { FaRegTrashAlt } from "react-icons/fa";


function Note({note, handleDeleteNote}){
    
    return(
        <div className="note">
            <p>{note.text}</p>
            <div className="note-footer">
                <p>{note.date}</p>
                <FaRegTrashAlt 
                className="delete-icon"
                onClick = {()=> handleDeleteNote(note.id)}
            />
            </div>
        </div>   
)
}

export default Note