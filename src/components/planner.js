import React,{useState} from 'react';
import {Form, TextArea} from 'semantic-ui-react';
import Note from './note';


const Planner = ({plannerDay}) => {
    const notesURL = "http://localhost:3000/notes" //get and post
    
    const[content, setContent] = useState("");
    
    const newNote = () => {
        const notesObj = {
            'method': 'POST',
            'headers': {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            'body': JSON.stringify({content, date:plannerDay})
        }
        
        fetch(notesURL)
        .then(res => res.json())
        .then(note => setContent(note))
        
    }
    
    const editNote = (noteId) => {
        const notesURL = `http://localhost:3000/notes/${noteId}`//edit and delete
        const notesObj = {
            'method': 'PATCH',
            'headers': {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            'body': JSON.stringify({content, date:plannerDay})
        }
    
        fetch(notesURL)
            .then(res => res.json())
            .then(note => setContent(note))
    }

    const handleChange = () => {
        //if (note exists) {
          //  editNote(noteId);
        //} else {
          //  newNote();
        //}
    }

    return (
        <Note handleChange={handleChange} plannerDay={plannerDay}/>
    )
}

export default Planner;