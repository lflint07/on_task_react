import React from 'react';
import {Sidebar, Segment} from 'semantic-ui-react';
import Planner from '../components/planner';

const PlannerContainer = ({visible, plannerDay, note, getNote, addNote, setCurrentNote}) => {
    return (
        <Sidebar
            as={Segment}
            animation='scale down'
            data-value="sidebar"
            direction='left'
            visible={visible}
            style={{width: "50%"}}
        >
            <Planner plannerDay={plannerDay} note={note} getNote={getNote} addnote={addNote} setCurrentNote={setCurrentNote}/>
        </Sidebar>
    )

}



export default PlannerContainer;