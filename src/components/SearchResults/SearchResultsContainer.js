import {connect} from 'react-redux';
import { getCardsBySearchString } from '../../redux/cardsRedux';
import SearchResults from './SearchResults';


const mapStateToProps = state => ({
  searchString: state.searchString,
  cards: getCardsBySearchString(state.searchString),
});

export default connect(mapStateToProps)(SearchResults);