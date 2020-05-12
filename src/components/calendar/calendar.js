import React, { Fragment } from 'react';
import Month from './month';
import monthArray from '../../data/calendearData';

const Calendar = () => {
    const createCalendar = () => {
        const getOffset = (prevMonth, month) => {
            if (prevMonth === undefined) {
                return 3 
            }

        }
        return monthArray.map((month, idx) => <Month key={month.month} month={month.month} numberOfDays={month.numberOfDays} offset ={getOffset(monthArray[idx-1], month)}/>)
    }

    return (
        <Fragment>
            {createCalendar()}
        </Fragment>
   
    )
}

export default Calendar;