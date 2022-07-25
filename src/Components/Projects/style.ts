import styled from "styled-components";

export const ProjectsContainer = styled.section`
    padding-top: 3rem;
    padding-bottom: 3rem;

    h1{
        font-weight: 600;
        font-size: ${window.innerWidth <= 500 ? 30 : 60}pt;
        color: ${props => props.theme.colors.detail};
    }
`