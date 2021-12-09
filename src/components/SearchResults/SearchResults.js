import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const SearchResults = props => {
  const {searchString, cards} = props;
  console.log('cards', cards);
  return (
    <section>
      <h3>{searchString}</h3>
      {cards.map(cardData => (
        <Card key={cardData.id} {...cardData} />
      ))}
    </section>
  );
};
 
SearchResults.propTypes = {
  searchString: PropTypes.string,
  cards: PropTypes.array,
}; 

export default SearchResults;