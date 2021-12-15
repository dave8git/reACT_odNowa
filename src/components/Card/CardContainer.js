import {connect} from 'react-redux';
import Card from './Card';
//import { createActionAddCard, getCardsForColumns } from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => {
  console.log(state); 
  console.log(props);
  return { //wyciąga ze stanu aplikacji i przekazuje jako propsy do podłączanego komponentu
    column: state.columns.find(column => column.id == props.columnId), //column.id - id kolumny ze stanu | props.columnId - id kolumny z karty // to całe mogłoby by być w pliku reduxowym w funkcji np. getInfoForCards - można ale nie trzeba przenosić

  };
};


// const mapDispatchToProps = (dispatch, props) => ({ // Czy funkcja mapDispatchToProps to jakaś standardowa funkcja Reduxa?  // mapDispatchToProps przygotowuje akcje i przekazuje do podłączanego komponentu
//   addCard: title => dispatch(createActionAddCard({  // Co ta funkcja (createActionAddColumn robi?) 
//     columnId: props.id,
//     title,
//   })),
// });
export default connect(mapStateToProps)(Card);