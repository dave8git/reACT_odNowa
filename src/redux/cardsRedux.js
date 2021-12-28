import shortid from 'shortid';

// selectors 
export const getCardsForColumns = ({cards, searchString},columnId) => cards.filter(card => (card.columnId == columnId) && (new RegExp(searchString, 'i').test(card.title)));

export const getCardsBySearchString = ({cards, searchString}) => cards.filter(card => (new RegExp(searchString, 'i').test(card.title)));

export const getAllCardsForColumn = ({cards},columnId) => cards.filter(card => (card.columnId == columnId)); 


// action name creator 
const reducerName = 'cards';

const createActionName = name => `app/${reducerName}/${name}`;

// action types

export const ADD_CARD = createActionName('ADD_CARD');
export const MOVE_CARD = createActionName('MOVE_CARD');

// action creators 

export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate()}, type: ADD_CARD }); //nawiasy {} mówię o tym, że payload będzie obiektem

export const createAction_moveCard = payload => ({ payload, type: MOVE_CARD });

// reducer

export default function reducer(statePart = [], action = {}) {
  console.log('działa');
  switch (action.type) {
    case ADD_CARD: 
    console.log(action.payload);
      return [...statePart, action.payload];
    case MOVE_CARD: {
      const {id, src, dest} = action.payload; 
      const targetCard = statePart.find(card => card.id == id); //można zrobić tak jak w treści [0] ale find zwraca jeden wynik i tak jest zgodnie ze sztuką, 
      const targetColumnCards = statePart.filter(card => card.columnId == dest.columnId);
      console.log(targetColumnCards.map(card => `${card.index}, title: ${card.title}`));
      if(dest.columnId == src.columnId){
        targetColumnCards.splice(src.index, 1);
        targetColumnCards.splice(dest.index, 0, targetCard);
        console.log(targetColumnCards.map(card => `${card.index}, title: ${card.title}`));
        console.log('!', statePart.map(card => {
          const targetColumnIndex = targetColumnCards.indexOf(card);
          if(targetColumnIndex > -1 && card.index != targetColumnIndex) {
            return {...card, index: targetColumnIndex};
          } else {
            return card;
          }
        }));
        return  statePart.map(card => {
          const targetColumnIndex = targetColumnCards.indexOf(card);
          if(targetColumnIndex > -1 && card.index != targetColumnIndex) {
            return {...card, index: targetColumnIndex};
          } else {
            return card;
          }
        });
      } else {
        return statePart;
      }
      //return statePart;
    }

    default: 
      return statePart;
  }
}

//commit