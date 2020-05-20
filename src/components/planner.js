import React, {Fragment} from 'react';
import Note from './note';
import TaskContainer from '../containers/tasksContainer';
import {Divider, Icon, Header} from 'semantic-ui-react';


const Planner = ({plannerDay, note, addNote, setCurrentNote, tasks}) => {
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
        <Fragment>
            <Divider horizontal>
                <Header as='h4'>
                    <Icon name="tasks" />
                    Tasks
                </Header>
            </Divider>
            <TaskContainer tasks={tasks}/>
                <Divider horizontal>
                    <Header as='h4'>
                        <Icon name="pencil" />
                    </Header>
                </Divider>
            <Note note={note} handleChange={handleChange} setCurrentNote={setCurrentNote}/>
        </Fragment>
        )
}

export default Planner;