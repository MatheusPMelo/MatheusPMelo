import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import Header from './Components/Header'
import Hero from "./Components/Hero"
import Global from "./Styles/Global"
import dark from "./Styles/themes/dark"
import light from "./Styles/themes/light"
import usePersistedState from "./Utils/usePersistedState"
import MenuMobile from "./Components/MenuMobile"

function App() {
  const [theme, setTheme] = usePersistedState('theme', dark)

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark)
  }


  return (
    <div className="App">
        <ThemeProvider theme={theme}>
          <Global />
          <Header 
            toggleTheme={toggleTheme}
          />
          <Hero />
          <Hero />
          <Hero />
          <Hero />
          {window.innerWidth <= 500 ? (<MenuMobile />):('')}
        </ThemeProvider>
    </div>
  )
}

export default App
