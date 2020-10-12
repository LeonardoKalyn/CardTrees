import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

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
    overflow: 'hidden',
    marginBottom: '12px',
    transition: [
      {
        property: 'max-height',
        duration: '0.5s',
        timingFunction: 'ease-in',
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
        role="button"
        data-testid="card-button"
      >
        {showImage ? 'Hide Image' : 'Show Image'}
      </button>
    </div>
  )
};

export default Card;
