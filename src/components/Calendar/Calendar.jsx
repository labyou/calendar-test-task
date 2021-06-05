import moment from 'moment';
import React from 'react';
import styled from "styled-components";

const GridWrapper = styled.div`
    max-width: 572px;
    max-height: 520px;
    margin: auto;
    padding: 2px;

    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 2px;

    background-color: black;
`;
const CellWrapper = styled.div`
    min-width: 80px;
    min-height: ${props => props.isHeader ? 20 : 55}px;
    
    display: flex;
    justify-content: ${props => props.isHeader ? 'center' : 'flex-end'};
    align-items: ${props => props.isHeader ? 'center' : 'flex-end'};

    font-size: ${props => props.isHeader ? 15 : 20}px;
    ${props => props.isHeader ? 'font-weight: bold' : ''};
    background-color: white;
    color: ${props => props.isSelectedMounth ? 'black' : 'white'};
`;
const DayWrapper = styled.div`
    margin: 1px;
`;

const Calendar = ({ startDay, today }) => {
    const totalDays = 42;
    const day = startDay.clone().subtract(1, 'day');
    const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());
    const isSelectedMounth = (day) => today.isSame(day, 'month');
    return (
        <GridWrapper>
            {
                [...Array(7)].map((_, i) => <CellWrapper key={_}isHeader isSelectedMounth>{(moment().day(i).format('ddd')).toUpperCase()}</CellWrapper>)
            }
            {
                daysArray.map((dayItem) => {
                    return (
                        <CellWrapper isSelectedMounth={ isSelectedMounth(dayItem)}key={dayItem.format('DDMMYYYY')}>
                            <DayWrapper>
                                {dayItem.format('D')}
                            </DayWrapper>
                        </CellWrapper>
                    )
                })
            }
        </GridWrapper>
    )
}

export { Calendar };