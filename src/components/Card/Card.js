import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = props => {
  const {title, icon, column} = props;
  console.log('column', column);
  return (
    <section className={styles.component}>
      {title}
      {
        (column) ? (<p>
          From column {column.title}
        </p>) : (null)
      }

    </section>
  );
};
 
Card.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  column: PropTypes.object,
};

export default Card;