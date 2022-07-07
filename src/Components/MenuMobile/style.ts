import styled from "styled-components";

export const ContainerMenuMobile = styled.section`
    position: fixed;
    width: 100%;
    background-color: ${props => props.theme.colors.navbarColor};
    overflow: hidden;
    z-index: 99999;
    bottom: 0;
    display: flex;
    align-items: center;

    ul{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 10vh;
        
        li{
            list-style: none;
            
            a{
                text-decoration: none;
                display: flex;
                justify-content: center;
                text-align: center;

                &::before{
                        content: "";
                        width: 10%;
                        height: 0px;
                        background-color: ${props => props.theme.colors.menuItemsColor};
                        position: absolute;
                        bottom: -13%;
                        border-radius: 10px;
                        box-shadow: 0 4px 10px ${props => props.theme.colors.menuItemsShadow};
                    }

                &:hover{
                        color: ${props => props.theme.colors.menuItemsColor};
                        text-shadow: 0 0 10px ${props => props.theme.colors.menuItemsColor};
                        transform: translateY();

                    &::before{
                        content: "";
                        width: 10%;
                        height: 10px;
                        background-color: ${props => props.theme.colors.menuItemsColor};
                        position: absolute;
                        bottom: -13%;
                        border-radius: 10px;
                        box-shadow: 0 4px 10px ${props => props.theme.colors.menuItemsShadow};
                    }
                }
            }
            &.current-menu-item {
                a::before {
                    width: 10%;
                }
            }

        }
    }
`