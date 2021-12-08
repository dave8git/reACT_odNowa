import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = props => {
  const {searchString, cards} = props;
  console.log('cards', cards);
  return (
    <section>
      <h3>{searchString}</h3>
     
    </section>
  );
};
 
SearchResults.propTypes = {
  searchString: PropTypes.string,
  cards: PropTypes.node,
}; 

export default SearchResults;