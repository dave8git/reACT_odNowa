import {connect} from 'react-redux';
import { createAction_moveCard } from '../../redux/cardsRedux';
import App from './App';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
  searchString: state.searchString,
});

const mapDispatchToProps = (dispatch) => ({
  moveCard: payload => dispatch(createAction_moveCard(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);