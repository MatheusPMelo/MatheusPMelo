import React, {useContext} from "react";
import {
    ButtonContainer,
    Container,
    Logo,
    Menu,
    SwitchContainer
} from './style'
import { ThemeContext } from "styled-components";

import Switch from 'react-switch'
import { shade } from 'polished'

import NavMenu from './Menu'

interface Prop{
    toggleTheme(): void
}

const Header: React.FC<Prop> = ({toggleTheme}) => {
    const { colors, title } = useContext(ThemeContext)


    const logo = [
        {
            word: '<'
        },
        {
            word: '/'
        },
        {
            word: 'M'
        },
        {
            word: 'a'
        },
        {
            word: 't'
        },
        {
            word: 'h'
        },
        {
            word: 'e'
        },
        {
            word: 'u'
        },
        {
            word: 's'
        },
        {
            word: ' '
        },
        {
            word: 'M'
        },
        {
            word: 'e'
        },
        {
            word: 'l'
        },
        {
            word: 'o'
        },
        {
            word: '>'
        },
    ]


    return(
        <Container>
            
                {window.innerWidth <= 500 ? (
                <div className="mobileTop">
                    <a href="#">
                        <Logo>
                            {logo.map((ltr,id) => (
                                <div>
                                    <span key={id} className="ltr">{ltr.word}</span>
                                </div>
                            ))}
                        </Logo>
                    </a>
                        
                    <Switch 
                        onChange={toggleTheme}
                        checked={title === 'light'}
                        checkedIcon={true}
                        uncheckedIcon={true}
                        height={20}
                        width={40}
                        offColor={shade(0, colors.logo)}
                        onColor={shade(1, colors.detail)}
                        onHandleColor={colors.detail}
                        offHandleColor={shade(0.1, colors.detail)}
                    />
                    
                    
                </div>
                
                ) : (

                <>
                
                <a href="#">
                    <Logo>
                        {logo.map((ltr,id) => (
                            <div>
                                <span key={id} className="ltr">{ltr.word}</span>
                            </div>
                        ))}
                    </Logo>
                </a>
                <Menu>
                    <NavMenu />
                </Menu>
                <SwitchContainer>
                <Switch 
                    onChange={toggleTheme}
                    checked={title === 'light'}
                    checkedIcon={true}
                    uncheckedIcon={true}
                    height={30}
                    width={50}
                    offColor={shade(0, colors.logo)}
                    onColor={shade(1, colors.detail)}
                    onHandleColor={colors.detail}
                    offHandleColor={shade(0.1, colors.detail)}
                />
                </SwitchContainer>
                    <ButtonContainer>
                        <button>
                            Contato
                        </button>
                    </ButtonContainer>
                </>
                )}               
                
        </Container>
    )
}

export default Header