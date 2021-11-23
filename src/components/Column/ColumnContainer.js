import {connect} from 'react-redux';
import Column from './Column';
import { createActionAddColumn } from '../../redux/columnsRedux.js';

export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);
const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, {columnId}) => ({
  addCard: title => dispatch(createActionAddColumn({title, columnId})),  //title to samo co title: title
});
export default connect(mapStateToProps, mapDispatchToProps)(Column);