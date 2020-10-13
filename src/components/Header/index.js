import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '80px',
    background: 'rgba(0,0,0,0.3)',
  },
  title: {
    fontFamily: 'Mali',
    fontSize: '40px',
    lineHeight: '42px',
    color: '#ffffff',
  },
});

function Header() {
  const styles = useStyles();

  return (
    <header className={styles.header} data-testid="header">
      <h1 className={styles.title} data-testid="header-text">
        Tree Cards
      </h1>
    </header>
  )
};

export default Header;
