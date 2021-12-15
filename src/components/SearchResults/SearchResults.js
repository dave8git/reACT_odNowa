import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/CardContainer';
import Column from '../Column/Column'; 
import styles from '../SearchResults/SearchResults.scss';

const SearchResults = props => {
  const {searchString, cards, title, icon} = props;
  console.log('cards', cards);
  console.log('title', title);
  return (
    <section>

      <h3>{searchString}</h3>
      {/* PRZYKŁAD UZYCIA WARUNKU W KODZIE REACT (poniżej): */}
      {/* {
        (cards.length) ? (<p>
          <Column cards={cards} title={title} icon={icon}>{title}</Column>
        </p>) : (<span>
            brak takiej karty
        </span>)
      } */}
      
      <div className={styles.text}>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </div>
    </section>
  );
};
 
SearchResults.propTypes = {
  searchString: PropTypes.string,
  cards: PropTypes.array,
  title: PropTypes.string,
  icon: PropTypes.string, 
}; 
//
export default SearchResults;