import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = props => {
  const {searchString} = props;
  return (
    <section>
      <h3>{searchString}</h3>
    </section>
  );
};
 
SearchResults.propTypes = {
  searchString: PropTypes.string,
}; 

export default SearchResults;