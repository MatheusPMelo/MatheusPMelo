import styled from "styled-components";

export const HeroContainer = styled.section`
    padding: 10% 10%;
    background-color: ${props => props.theme.colors.backgroundSecondary};
    display: flex;
    align-items: center;
    height: 80vh;
    h1, span{
        color: ${props => props.theme.colors.title};
        font-size: 60px;
    }
    h2{
        margin: 2rem auto;
        color: ${props => props.theme.colors.detail};
    }
    h3{
        margin: 2rem auto;
        color: ${props => props.theme.colors.title};
    }
`