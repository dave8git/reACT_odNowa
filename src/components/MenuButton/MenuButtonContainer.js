import {connect} from 'react-redux';
import MenuButton from './MenuButton';
import { getCardsForColumns } from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => {
    console.log('menuButton state', state); 
    console.log('menuButton props', props);
  return {
    columns: state.columns, //getColumnsForColumns(state, props.id),
  };
};

export default connect(mapStateToProps)(MenuButton);