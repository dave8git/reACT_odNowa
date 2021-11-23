import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.title,
  }
  render() {
    console.log(this.props);
    const {title} = this.props;
    return (
      <section className={styles.component}>
        {title}
      </section>
    );
  }
}

export default Card;