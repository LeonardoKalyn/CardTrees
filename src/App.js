import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';

import Header from './components/Header';
import treesServices from './services/trees';

const useStyles = createUseStyles({
  container: {
    minWidth: '100vW',
    minHeight: '100vH',
    background: 'linear-gradient(110.1deg, rgb(34, 126, 34) 2.9%, rgb(168, 251, 60) 90.3%)',
  },
});

function App() {
  const styles = useStyles();

  useEffect(() => {
    (async ()=> {
      const { data, error } = await treesServices.getTrees();
      console.log(data)
    })();
  }, [])

  return (
    <div className={styles.container}>
      <Header />

    </div>
  );
}

export default App;
