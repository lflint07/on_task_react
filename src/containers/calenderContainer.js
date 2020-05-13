import React, { Fragment } from 'react';
import GoalContainer from './goalContainer';
import ProjectContainer from './projectContainer';
import Calender from '../components/calendar/calendar';


const CalendarContainer = ({showDay}) => {
    return (
        <Fragment>
            <Calender showDay={showDay}/>
            <GoalContainer />
            <ProjectContainer />
        </Fragment>
    )
}

export default CalendarContainer