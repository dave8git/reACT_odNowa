import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd'; 

const Column = props => {
  const {title, icon, cards, addCard, id} = props;
  console.log(cards);
  return (
    <section className={styles.component}>
      <h3 className={styles.title}>{title}<span className={styles.icon}><Icon name={icon} /></span></h3>
      <div>
        <Droppable droppableId={id}>
          {provided => (
            <div className={styles.cards}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {cards.map(cardData => (
                <Card key={cardData.id} {...cardData} />
              ))}
            </div>
          )}
          
          
        </Droppable>
        
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
  id: PropTypes.string,
};    
      
    
Column.defaultProps = {
  icon: settings.defaultColumnIcon,
};


export default Column;