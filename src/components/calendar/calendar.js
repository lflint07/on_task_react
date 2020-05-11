import React, { Fragment } from 'react';
import Month from './month';

const Calendar = () => {
    const createCalendar = () => {
        const MonthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        return MonthArray.map(month => <Month month={month}/>)
    }
    return (
        <Fragment>
            {createCalendar()}
        </Fragment>
   
    )
}

export default Calendar;