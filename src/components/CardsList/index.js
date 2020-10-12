import React, { useEffect, useState } from 'react';

import CardsList from './CardsList';
import treesServices from '../../services/trees';

function CardsListContainer() {
  const [treesList, setTreesList] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    (async ()=> {
      const { data, error } = await treesServices.getTrees();

      if(error) {
        setError(error);
        return
      }

      setError('');
      setTreesList(data);
    })();
  }, []);

  
  return (<CardsList data={treesList} error={error} />);
}

export default CardsListContainer;
