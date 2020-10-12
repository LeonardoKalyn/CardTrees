import React from 'react';
import { createUseStyles } from 'react-jss';

import Card from '../Card';

const useStyles = createUseStyles({
  list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '12px',
  },
  error: {
    color: '#ffffff',
    fontWeight: '700',
  },
  errorContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '12px',
    width: '100%',
    height: '40px',
    backgroundColor: 'rgba(204, 2, 49, 0.7)',
  },
});

function CardsList({
  data,
  error,
}) {
  const styles = useStyles();

  return (
    <div>
      {!!error &&
        <div className={styles.errorContainer}>
          <p className={styles.error}>
            {error}
          </p>
        </div>
      }

      <ul className={styles.list}>
        {data.map((tree, index) => (
          <l1 key={index}>
            <Card
              title={tree.name}
              text={tree.species_name}
              image={tree.image}
            />
          </l1>
        ))}
      </ul>
    </div>
  );
}

export default CardsList;
