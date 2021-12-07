import {connect} from 'react-redux';
import SearchResults from './SearchResults';


const mapStateToProps = state => ({
  searchString: state.searchString,
});

export default connect(mapStateToProps)(SearchResults);