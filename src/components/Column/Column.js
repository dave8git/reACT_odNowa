import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';
import PropTypes from 'prop-types';

class Column extends React.Component {
    // state = {
    //   cards: this.props.cards || [],
    // }
    static propTypes = {
      cards: PropTypes.array,
      title: PropTypes.string,
      icon: PropTypes.string,
      addCard: PropTypes.func,
    }
    // addCard(title){
    //   this.setState(state => (
    //     {
    //       cards: [
    //         ...state.cards,
    //         {
    //           key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
    //           title, 
    //         },
    //       ],
    //     }
    //   ));
    // }
    render() {
      const {title, icon, cards, addCard} = this.props;
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
            <Creator text={settings.cardCreatorText} action={title => addCard(title)} />
          </div> 
        </section>
      );
    }
}

export default Column;