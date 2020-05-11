import React, { Fragment } from 'react';
import GoalContainer from './goalContainer';
import PlannerContainer from './plannerContainer';
import ProjectContainer from './projectContainer';
import Calender from '../components/calendar/calendar';


const CalendarContainer = () => {
    return (
        <Fragment>
            <Calender />
            <GoalContainer />
            <PlannerContainer />
            <ProjectContainer />
        </Fragment>
    )
}

export default CalendarContainer