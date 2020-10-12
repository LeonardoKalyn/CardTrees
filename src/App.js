import React from 'react';
import { createUseStyles } from 'react-jss';

import Header from './components/Header';
import CardsList from './components/CardsList';

const useStyles = createUseStyles({
  container: {
    minWidth: '100vW',
    minHeight: '100vH',
    background: 'linear-gradient(110.1deg, rgb(34, 126, 34) 2.9%, rgb(168, 251, 60) 90.3%)',
    borderWidth: '1px',
  },
});

function App() {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Header />
      <CardsList />
    </div>
  );
}

export default App;
