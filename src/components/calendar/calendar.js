import React, {useState} from 'react';
import Month from './month';
import monthArray from '../../data/calendearData';
import {Container, Pagination, Segment} from 'semantic-ui-react';

const Calendar = ({showDay}) => {
    const [activePage, setActivePage] = useState(1)
    // const createCalendar = () => {
    //     const getOffset = (prevMonth, month) => {
    //         if (prevMonth === undefined) {
    //             return 3 
            

    //     }
    //     return monthArray.map((month, idx) => <Month key={month.month} month={month.month} numberOfDays={month.numberOfDays} offset ={(month.offset)}/>)
    // }

    const displayCalender = () => {
        const currentMonth = monthArray[activePage-1]
        return <Month month={currentMonth.month} numberOfDays={currentMonth.numberOfDays} offset={currentMonth.offset} showDay={showDay} />

    }

    const handlePaginationChange = (e, pageInfo) => {
        setActivePage(pageInfo.activePage)
    }

    return (
        <Container style={{width: "70%"}}>
            {displayCalender()}
            <Segment style ={{textAlign: "center"}}>
                <Pagination
                    activePage={activePage}
                    onPageChange={handlePaginationChange}
                    totalPages={12}
                    ellipsisItem={null}
                />
            </Segment>
        </Container>
   
    )
}

export default Calendar;