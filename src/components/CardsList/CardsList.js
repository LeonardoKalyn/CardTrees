import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

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
  emptyList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: '340px',
    borderRadius: '5px',
    margin: '12px',
    padding: '12px',
  },
  emptyListText: {
    fontFamily: 'Mali',
    fontSize: '20px',
    lineHeight: '22px',
    color: '#227e22',
  },
});

function CardsList({
  data=[],
  error,
}) {
  const styles = useStyles();

  return (
    <div>
      {!!error &&
        <div className={styles.errorContainer} data-testid="error-container">
          <p className={styles.error} data-testid="error">
            {error}
          </p>
        </div>
      }

      <ul className={styles.list} data-testid="cards-list">
        { data?.length
          ? data.map((tree, index) => (
            <li key={index} data-testid="cards-list-item">
              <Card
                title={tree.name}
                text={tree.species_name}
                image={tree.image}
              />
            </li>
          )) : (
            <div className={styles.emptyList} data-testid="empty-list">
              <p className={styles.emptyListText} data-testid="empty-list-message">
                There are no trees to show =(
              </p>
            </div>
          )
        }
      </ul>
    </div>
  );
}

CardsList.propTypes = {
  data: PropTypes.array,
  error: PropTypes.string,
};

export default CardsList;
