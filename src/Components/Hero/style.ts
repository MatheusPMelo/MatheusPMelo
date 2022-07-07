import styled from "styled-components";

export const Container = styled.section`
    padding: 6% 10%;
    background-color: ${props => props.theme.colors.backgroundSecondary};
    display: flex;
    align-items: center;
    height: 80vh;
    h1{
        color: ${props => props.theme.colors.title};
    }
`