import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = props => {
  const {searchString, cards} = props;
  return (
    <section>
      <h3>{searchString}</h3>
      {cards.map()}
    </section>
  );
};
 
SearchResults.propTypes = {
  searchString: PropTypes.string,
}; 

export default SearchResults;