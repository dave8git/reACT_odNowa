import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import { createActionAddCard, getCardsBySearchString } from '../../redux/cardsRedux.js';


const mapStateToProps = (state, props) => ({
  searchString: state.searchString,
  cards: getCardsBySearchString(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({ // Czy funkcja mapDispatchToProps to jakaś standardowa funkcja Reduxa?  
  addCard: title => dispatch(createActionAddCard({  // Co ta funkcja (createActionAddColumn robi?)
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);