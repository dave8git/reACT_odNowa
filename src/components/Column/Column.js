import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';
import PropTypes from 'prop-types';

const Column = props => {
  const {title, icon, cards, addCard} = props;
  console.log(cards);
  return (
    <section className={styles.component}>
      <h3 className={styles.title}>{title}<span className={styles.icon}><Icon name={icon} /></span></h3>
      <div>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </div>
       
      <div className={styles.creator}>
        <Creator text={settings.cardCreatorText} action={addCard} />
      </div> 
    </section>
  );
};
    
Column.propTypes = {
  cards: PropTypes.array,
  title: PropTypes.string,
  icon: PropTypes.string,
  addCard: PropTypes.func,
};    
      
    
Column.defaultProps = {
  icon: settings.defaultColumnIcon,
};


export default Column;