import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

import Header from './components/Header';
import Card from './components/Card';
import treesServices from './services/trees';

const useStyles = createUseStyles({
  container: {
    minWidth: '100vW',
    minHeight: '100vH',
    background: 'linear-gradient(110.1deg, rgb(34, 126, 34) 2.9%, rgb(168, 251, 60) 90.3%)',
    padding: '1px',
  },
});

function App() {
  const [treesList, setTreesList] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    (async ()=> {
      const { data, error } = await treesServices.getTrees();

      if(error) {
        setError(error);
        return
      }

      console.log(data)

      setError('');
      setTreesList(data);
    })();
  }, []);

  
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Header />

      <div>
        {treesList.map((tree, index) => (
          <Card
            key={index}
            title={tree.name}
            text={tree.species_name}
            image={tree.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
