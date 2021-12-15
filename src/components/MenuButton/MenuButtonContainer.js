import {connect} from 'react-redux';
import MenuButton from './MenuButton';
import { getColumnsWithCards } from '../../redux/columnsRedux.js';


const mapStateToProps = (state, props) => {
    console.log('menuButton state', state); 
    console.log('menuButton props', props);
  return {
    columns: getColumnsWithCards(state), //getColumnsForColumns(state, props.id),
  };
};

export default connect(mapStateToProps)(MenuButton);