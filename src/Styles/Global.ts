import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Inter;
        transition: all .5s ease;
        color: ${props => props.theme.colors.logo};
    }

    body{
        background-color: ${props => props.theme.colors.backgroundPrimary};
    }
`