import React, { useEffect } from 'react';
import { useTheme } from 'styled-components';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout({ onToggleTheme, selectedTheme }) {
  useEffect(() => {
    console.log({ selectedTheme })

    return () => {
      console.log('<Layout /> saiu da tela')
    }
  })

  const theme = useTheme()

  console.log(theme)

  return (
    <>
      <Header
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
      <PostsList />
      <Footer
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />

      <div
        style={{
          marginTop: 24,
          backgroundColor: theme.footerBackgroundColor,
          color: theme.textColor,
          padding: 24,
        }}
      >
        Hoya world! How are you doing today?
      </div>
    </>
  );
}
