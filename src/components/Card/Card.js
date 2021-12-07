import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = props => {
  const {title} = props;
  return (
    <section className={styles.component}>
      {title}
    </section>
  );
};
 
Card.propTypes = {
  title: PropTypes.string,
};

export default Card;