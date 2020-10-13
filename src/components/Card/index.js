import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: '340px',
    borderRadius: '5px',
    margin: '12px',
    padding: '12px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: [{
      property: 'box-shadow',
      duration: '0.3s',
      timingFunction: 'ease',
    }],

    '&:hover': {
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
    },
  },
  title: {
    fontFamily: 'Mali',
    fontSize: '20px',
    lineHeight: '22px',
    marginBottom: '6px',
  },
  text: {
    fontSize: '16px',
    lineHeight: '22px',
    marginBottom: '12px',
  },
  image: {
    width: '300px',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '5px',
    border: '1px solid #cccccc',
  },
  imageContainer: ({ showImage }) => ({
    maxHeight: showImage ? '450px' : '0',
    visibility: showImage ? 'visible' : 'hidden',
    overflow: 'hidden',
    marginBottom: '12px',
    transition: [
      {
        property: 'max-height',
        duration: '0.5s',
        timingFunction: 'ease',
      },
      {
        property: 'visibility',
        delay: showImage ? '0s' : '0.6s',
      },
    ],
  }),
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    outline: 'none',
    padding: '8px',
    color: '#ffffff',
    width: '130px',
    backgroundColor: 'rgba(34, 126, 34, 0.7)',
    borderRadius: '4px',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgb(34, 126, 34)',
    },
  },
});

function Card({
  title,
  text,
  image,
}) {
  const [showImage, setShowImage] = useState(false);

  const styles = useStyles({ showImage });

  return (
    <div className={styles.card} data-testid="card">
      <h2 className={styles.title} data-testid="card-title">
        {title}
      </h2>
      <p className={styles.text} data-testid="card-text">
        {text}
      </p>
      <div className={styles.imageContainer} data-testid="card-image-container">
        <img
          src={image}
          className={styles.image}
          alt={title}
          data-testid="card-image"
        />
      </div>
      <button
        className={styles.button}
        onClick={() => setShowImage(!showImage)}
        type="button"
        data-testid="card-button"
      >
        {showImage ? 'Hide Image' : 'Show Image'}
      </button>
    </div>
  )
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
