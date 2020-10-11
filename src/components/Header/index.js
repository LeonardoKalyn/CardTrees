import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: 100,
    background: 'rgba(0,0,0,0.3)',
  },
  logo: {
    fontSize: 20,
    lineHeight: 22,
    color: '#ffffff',
  },
});

function Header() {
  const styles = useStyles();

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        Tree Cards
      </h1>
    </header>
  )
};

export default Header;
