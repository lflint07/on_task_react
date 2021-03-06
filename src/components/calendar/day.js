import React from 'react';
import {Card, Grid} from 'semantic-ui-react';

const Day = ({day, displayDay, showDay}) => {
    
    const handleClick = () => {
        showDay(day)
    };
    
    
    return (
        <Grid.Column width={2}>
            <Card onClick={handleClick}>
                <Card.Content>
                    {displayDay}
                </Card.Content>
            </Card>
        </Grid.Column>
    )

}
export default Day;