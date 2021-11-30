import {connect} from 'react-redux';
import Column from './Column';
import { createActionAddCard, getCardsForColumns } from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumns(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({ // Czy funkcja mapDispatchToProps to jakaś standardowa funkcja Reduxa?  
  addCard: title => dispatch(createActionAddCard({  // Co ta funkcja (createActionAddColumn robi?)
    columnId: props.id,
    title,
  })),
});
export default connect(mapStateToProps, mapDispatchToProps)(Column);