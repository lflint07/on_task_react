import React from 'react';
import {Form, TextArea} from 'semantic-ui-react';

const Planner = ({plannerDay}) => {
    return (
        <form>
            <TextArea placeholder={plannerDay} style={{minheight: 200}} />
        </form>
    )
}

export default Planner;