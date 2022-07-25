import styled from "styled-components";

export const StyImg = styled.div`
    margin:1rem auto ;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    img{
        min-width: 90%;
        height: 100%;
        object-fit: cover;
        object-position: top center;
        margin: 1rem auto;
        border-radius: 1rem;
        opacity: .6;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;

        &:hover{
            opacity: 1;
            transform: scale(1.1);
            box-shadow: 0 0 10px ${props => props.theme.colors};
        }

        
    }
    .opacity{
        position: absolute;
        background-color: ${props => props.theme.colors.detail};
        min-width: 90%;
        height: 100%;
        z-index: 1;
        opacity: .9;
        border-radius: 1rem;
        &:hover{
            opacity: 0;
            transform: scale(1.1);
        }
    }


    @media (max-width: 500px) {
        height: 300px;
        img{
            width: 90%;
        }        
    }
`