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
  },
  imageContainer: ({ showImage }) => ({
    maxHeight: showImage ? 'unset' : '0',
    overflow: 'hidden',
    marginBottom: '12px',
  }),
});

function Card({
  title,
  text,
  image,
}) {
  const [showImage, setShowImage] = useState(false);

  const styles = useStyles({ showImage });

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        {title}
      </h2>
      <p className={styles.text}>
        {text}
      </p>
      <div className={styles.imageContainer}>
        <img
          src={image}
          className={styles.image}
          alt={title}
        />
      </div>
      <button
        className={styles.button}
        onClick={() => setShowImage(!showImage)}
        type="button"
      >
        {showImage ? 'Hide Image' : 'Show Image'}
      </button>
    </div>
  )
};

export default Card;
