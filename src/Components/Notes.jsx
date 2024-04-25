import Note from "./Note"
import AddNote from './AddNote'

function Notes({noteList, addNewNotes, handleDeleteNote}){
    
    return(
            <div className="notes-list">
                {noteList.map((note) => (
                    <Note 
                        key = {note.id}
                        note = {note}
                        handleDeleteNote = {handleDeleteNote}
                    />
                ))}
                <AddNote 
                    addNewNotes = {addNewNotes} />
            </div>
    )
}

export default Notes