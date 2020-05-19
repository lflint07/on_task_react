import React from 'react';
import Note from './note';


const Planner = ({plannerDay, note, getNote, addNote, setCurrentNote}) => {
    const notesURL = "http://localhost:3000/notes" //get and post
    
    
    const newNote = (content) => {
        const notesObj = {
            'method': 'POST',
            'headers': {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            'body': JSON.stringify({planner_id: 1,content, date:plannerDay})
        }
        
        fetch(notesURL, notesObj)
        .then(res => res.json())
        .then(note => {
            addNote(note)
            setCurrentNote(note)
        })
    }
    
    const editNote = (noteId, content) => {
        const notesURL = `http://localhost:3000/notes/${noteId}`//edit and delete
        const notesObj = {
            'method': 'PATCH',
            'headers': {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            'body': JSON.stringify({planner_id: 1, content, date:plannerDay})
        }
    
        fetch(notesURL, notesObj)
            .then(res => res.json())
            .then(note => console.log(note))
    }

    const handleChange = (content) => {
        if (note) {
           editNote(note.id, content);
        } else {
           newNote(content);
        }
    }
    
    return (
        <Note note={note} handleChange={handleChange} plannerDay={plannerDay} setCurrentNote={setCurrentNote}/>
    )
}

export default Planner;