import React from 'react';
import Day from './day';
import {Grid} from 'semantic-ui-react';

const Week = ({monthId,week, numberOfDays, offset, showDay}) => {

    const displayWeek = () => {
        const dayArray = [1, 2, 3, 4, 5, 6, 7];

        const rawDay = (day) => {
           const calendarDay = ((week -1) * 7) + (day - offset)
           
           if (calendarDay <= numberOfDays && calendarDay > 0){
               return calendarDay
                }
    };

    const formattedDay = (day) => {
        const unformattedDay = rawDay(day);
        if (unformattedDay !== undefined) {
            const month = monthId > 9 ? monthId : `0${monthId}`;
            const zeroPaddedDay = unformattedDay > 9 ? unformattedDay : `0${unformattedDay}`
            return `2020${month}${zeroPaddedDay}`;
        } else {
            return null;
        }
     
    }
        return dayArray.map(day => <Day key={`${week}-${day}`} day={formattedDay(day)} displayDay={rawDay(day)} showDay={showDay}/>)
    }

    return (

          <Grid.Row>
            {displayWeek()}
          </Grid.Row>
   

    )
}

export default Week;