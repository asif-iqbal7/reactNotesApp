import Notes from './Components/Notes'
import Header from './Components/Header'
import Search from './Components/Search'
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'

function App() {

  const [notes, addNotes] = useState(JSON.parse(localStorage.getItem('react-notes-app')) || []);
  const [darkMode, setDarkMode] = useState(false);
  const [searchText, setSearchText] = useState('');
  
  const addNewNotes = (text) => {
      const d = new Date();
      const date = d.toLocaleDateString();
      const newNote = {
        id: nanoid(),
        text: text,
        date: date, 
       };
        addNotes((prev)=> [...prev, newNote ]);    
  };

  const deleteNote = (id) => {
       const newNotes = notes.filter((note) => note.id  !== id);
       addNotes(newNotes);
  };

useEffect(()=>{
  localStorage.setItem('react-notes-app', JSON.stringify(notes));
},[notes]);
  
  return (
    <>
      <div className={`${darkMode && 'dark-mode'}`}>
        <div className="container">
          <Header
            toggleMode = {setDarkMode} 
          />
          <Search 
          setSearchText ={setSearchText}/>
          <Notes
            noteList = {notes.filter((note)=> note.text.toLowerCase().includes(searchText))}
            addNewNotes = {addNewNotes} 
            handleDeleteNote = {deleteNote} 
            /> 
              
        </div>
      </div>
    </>
  )
}

export default App
