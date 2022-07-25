import styled from "styled-components";

export const ContainerMenuMobile = styled.section`
    position: fixed;
    width: 100%;
    z-index: 99999;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: ${props => props.theme.colors.navbarColor}; */
    
    
    ul{
        overflow: hidden;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 70px;
        background-color: ${props => props.theme.colors.navbarColor};
        margin: auto 2rem;
        box-shadow:  0 0 10px ${props => props.theme.colors.menuItemsShadow};
        border-radius: 1rem 1rem 0 0;

        
        li{
            list-style: none;
            
            a{
                text-decoration: none;
                display: flex;
                justify-content: center;
                text-align: center;
                position: relative;

                &::before{
                        content: "";
                        width: 100%;
                        height: 0px;
                        background-color: ${props => props.theme.colors.menuItemsColor};
                        position: absolute;
                        bottom: 0;
                        border-radius: 10px;
                        box-shadow: 0 4px 10px ${props => props.theme.colors.menuItemsShadow};
                    }

                &:hover{
                        color: ${props => props.theme.colors.menuItemsColor};
                        text-shadow: 0 0 10px ${props => props.theme.colors.menuItemsShadow};
                        transform: translateY(-10px);

                    &::before{
                        content: "";
                        width: 100%;
                        height: 10px;
                        bottom: -4vh;
                        background-color: ${props => props.theme.colors.menuItemsColor};
                        position: absolute;
                        border-radius: 10px;
                        box-shadow: 0 4px 10px ${props => props.theme.colors.menuItemsShadow};
                    }
                }
            }
            &.current-menu-item {
                a::before {
                    height: 10px;
                    width: 10%;
                }
            }

        }
    }
`