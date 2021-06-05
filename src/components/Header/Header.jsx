import React from 'react';
import styled from 'styled-components';

const DivWrapper = styled.div`
    max-width: 572px;
    height: 50px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: black;
    backgrounf-color: white;
    border: 2px solid black;
    border-bottom: 0px;
`;

const TextWrapper = styled.span`
    font-size: 35px;
    text-transform: uppercase;
    font-weight: bold;
`;
const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;

    width: 160px;
`;
const ButtonWrapper = styled.button`
    margin: 10px;
    width: 40px;
    height: 40px;

    border: none;
    outline: none;

    color: white;
    background-color: black;

    &:hover {
      cursor: pointer;
    }
`;
const Header = ({ today, nextHandler, prevHandler }) => {
    return (
        <DivWrapper>
            <div>
                <ButtonWrapper onClick={prevHandler}>&lt;</ButtonWrapper>
            </div>
            <TextContainer>
                <TextWrapper>{ today.format('MMM') }</TextWrapper>
                <TextWrapper>{ today.format('YYYY') }</TextWrapper>
            </TextContainer>
            <div>
                <ButtonWrapper onClick={nextHandler}>&gt;</ButtonWrapper>
            </div>
        </DivWrapper>
    )
}

export { Header };