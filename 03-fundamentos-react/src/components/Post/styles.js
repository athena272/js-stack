import styled, { css } from "styled-components";

export const SubTitle = styled.small`
border: 1px solid red;
`

export const Rate = styled.span`
border: 1px solid blue;
`

export const Container = styled.article`
    margin-bottom: 24px;
    /* opacity: ${(props) => props.isRemove ? 0.5 : 1};
    color: ${(props) => props.isRemove ? '#f00' : '#fff'}; */

    ${(props) => css`
        opacity: ${props.isRemove ? 0.5 : 1};
        color: ${props.isRemove ? '#f00' : '#fff'};
    `}
`
