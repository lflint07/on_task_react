import React, {useState, useEffect} from 'react';
import { Form, TextArea} from 'semantic-ui-react';

const Note = ({handleChange,note}) => {
    const [content, setContent] = useState("");

    useEffect(() => {
        note !== null ? setContent(note.content) : setContent("");  
    }, [note])

    const handleNote = (event) => {
        const content = event.target.value;
        setContent(content);
        handleChange(content);
    }

    return (
        <Form>
            <TextArea onChange={handleNote} value={content} style={{minheight:500}} data-value="sidebar" placeholder={"Notes..."}/>
        </Form>
    )
}

export default Note;