import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes'

function App() {
  const [theme, setTheme] = useState('dark')

  const firstRender = useRef(true)

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme])

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark')
  }

  console.log(firstRender)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    console.log({ theme })
    console.log("EVITEI O PRIMEIRO USER EFFECT")
  }, [theme])

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout
        onToggleTheme={handleToggleTheme}
        selectedTheme={theme}
      />
      {/* <button onClick={handleToggleTheme}>TOGGLE</button>
      {theme === 'dark' && (
        <Layout
          onToggleTheme={handleToggleTheme}
          selectedTheme={theme}
        />
      )} */}
    </ThemeProvider>
  );
};

export default App;
