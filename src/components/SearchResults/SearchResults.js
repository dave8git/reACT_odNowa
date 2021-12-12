import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Column from '../Column/Column'; 

const SearchResults = props => {
  const {searchString, cards, title, icon} = props;
  console.log('cards', cards);
  return (
    <section>
      <h3>{searchString}</h3>

      if(cards) {
        <Column cards={cards} title={title} icon={icon} />
      } else {
        'brak takiej karty'
      };

      {/* {cards.map(cardData => (
        <Card key={cardData.id} {...cardData} />
      ))} */}
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