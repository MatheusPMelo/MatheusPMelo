import styled, {css} from "styled-components";

export const Container = styled.header`
    background-color: ${props => props.theme.colors.navbarColor};
    padding: 1.5rem 10%;
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    a{text-decoration:none; }

    @media (max-width: 500px) {
        position: relative !important;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .mobileTop{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .mobileMenu{
        position: relative;
        margin:auto 1rem;
        right: 0;
        top: 0;
        
        span{
            position: absolute;
            width: 40px;
            height: 4px;
            background: ${props => props.theme.colors.logo};
            border-radius: 1rem;

            &:nth-child(1){
                transform: translateY(-10px);
                width: 40px;
            }
            &:nth-child(2){
                transform: translateY(10px);
                width: 40px;
            }

            
        }
    }

    @media (max-width: 930px) {
        display: flex;
        align-items: center;
    }
`

export const Logo = styled.div`
    cursor: pointer;
    display: flex;
    div{
        transition: .3s;

        @media (min-width: 930px) {
            &:hover{
                transform: translateY(-5px);
            }
        }


        span{
        font-size: 30px;
        font-weight: 500;
        transition: .3s;
        color: ${props => props.theme.colors.logo};
        text-shadow: 0 4px 4px rgba(0,0,0,.25);
        opacity: 1;

            
            @media (min-width: 930px) {
                &:hover{
                    opacity: .5;
                    text-shadow: 0 10px 8px rgba(0,0,0,.5);
                }
            }

            @media (max-width: 500px) {
                font-size: 18px;
            }
        }
    }

    @media (max-width: 930px) {
        
        div{
            

                span{
                    font-size: 20px;
                }

        }
    }
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    ul{
        display: flex;
        flex-wrap: wrap;
    
        li{
            list-style: none;
            margin: auto 1rem;
            display: flex;
            
            a{
                color: ${props => props.theme.colors.logo};
                font-size: 20px;
                font-weight: 500;
                position: relative;
                &::before{
                    transition: .4s;
                        content: "";
                        width: 100%;
                        height: 0px;
                        background-color: ${props => props.theme.colors.menuItemsColor};
                        position: absolute;
                        top: -145%;
                        border-radius: 10px;
                }

                @media (min-width: 930px) {
                    &:hover{
                        color: ${props => props.theme.colors.menuItemsColor};
                        text-shadow: 0 0 10px ${props => props.theme.colors.menuItemsColor};


                        &::before{
                            content: "";
                            width: 100%;
                            height: 10px;
                            background-color: ${props => props.theme.colors.menuItemsColor};
                            position: absolute;
                            top: -145%;
                            border-radius: 10px;
                            box-shadow: 0 4px 10px ${props => props.theme.colors.menuItemsShadow};
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 930px) {
        ul{
            li{
                a{
                    font-size: 15px;
                }
            }
        }
    }
`

export const SwitchContainer = styled.div`
    border-radius: 50%;

    display: flex;
    align-items: center;
`
export const ButtonContainer = styled.div`
    button{
        background-color: ${props => props.theme.colors.detailBtn};
        padding: .5rem 1rem;
        border: none;
        border-radius: 10px;
        font-size: 20px;
        font-weight: 500;
        cursor: pointer;

        @media (min-width: 930px) {
            &:hover{
                box-shadow: 5px 5px 0 ${props => props.theme.colors.detailDarker};
                transform: translate(-5px, -5px);
            }
        }
    }
`