import React from 'react';
import {Sidebar, Segment} from 'semantic-ui-react';
import Planner from '../components/planner';

const PlannerContainer = ({visible, plannerDay, note, addNote, setCurrentNote, tasks}) => {
    return (
        <Sidebar
            as={Segment}
            animation='scale down'
            data-value="sidebar"
            direction='left'
            visible={visible}
            style={{width: "50%"}}
        >
            <Planner plannerDay={plannerDay} note={note} addnote={addNote} setCurrentNote={setCurrentNote} tasks={tasks}/>
        </Sidebar>
    )

}



export default PlannerContainer;