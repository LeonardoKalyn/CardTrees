import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100px',
    background: 'rgba(0,0,0,0.3)',
  },
  title: {
    fontSize: '30px',
    lineHeight: '32px',
    color: '#ffffff',
  },
});

function Header() {
  const styles = useStyles();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Tree Cards
      </h1>
    </header>
  )
};

export default Header;
