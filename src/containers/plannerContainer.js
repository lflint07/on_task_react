import React from 'react';
import {Sidebar, Segment} from 'semantic-ui-react';
import Planner from '../components/planner';

const PlannerContainer = ({visible, plannerDay, note, getNote, getNotes}) => {
    return (
        <Sidebar
            as={Segment}
            animation='scale down'
            data-value="sidebar"
            direction='left'
            visible={visible}
            style={{width: "50%"}}
        >
            <Planner plannerDay={plannerDay} note={note} getNote={getNote} getNotes={getNotes}/>
        </Sidebar>
    )

}



export default PlannerContainer;