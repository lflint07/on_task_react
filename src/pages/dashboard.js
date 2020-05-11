import React, { Fragment } from 'react';
import CalendarContainer from '../containers/calenderContainer';
import ProgressContainer from '../containers/progressContainer';
import FriendsContainer from '../containers/friendsContainer';

const Dashboard = () => {
    return (
        <Fragment>
            <CalendarContainer/>
            <ProgressContainer/>
            <FriendsContainer/>
        </Fragment>
    )
}

export default Dashboard;