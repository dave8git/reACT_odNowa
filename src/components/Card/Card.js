import React from 'react';
import styles from './Card.scss';

class Card extends React.Component {
  render() {
      console.log(this.props);
    return (
      <section className={styles.component}>
        {this.props.title}
      </section>
    )
  }
}

export default Card;