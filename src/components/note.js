import React from 'react';
import { Form, TextArea} from 'semantic-ui-react';

const Note = (plannerDay, handleChange) => {
    return (
        <form>
            <TextArea placeholder={plannerDay} style={{minheight:500}} data-value="sidebar"/>
        </form>
    )
}

export default Note;