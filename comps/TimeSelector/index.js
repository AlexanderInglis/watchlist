import React from 'react'
import styled from 'styled-components/native'

const Wrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 10px 20px;
`;

const TouchButton = styled.TouchableOpacity`

`;

const Number = styled.Text`
    color: #3C4A60;
    font-weight: 700;
    font-size: 18px;
`;

const TimeSelector = ({}) => {
    return (
        <Wrapper>
            <TouchButton><Number>1D</Number></TouchButton>
            <TouchButton><Number>1W</Number></TouchButton>
            <TouchButton><Number>1M</Number></TouchButton>
            <TouchButton><Number>3M</Number></TouchButton>
            <TouchButton><Number>ALL</Number></TouchButton>
        </Wrapper>
    )
}

export default TimeSelector