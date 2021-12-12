import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = props => {
  const {title, icon} = props;
  return (
    <section className={styles.component}>
      {title}
      {icon}
    </section>
  );
};
 
Card.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default Card;