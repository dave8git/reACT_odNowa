import shortid from 'shortid';

// selectors 
export const getCardsForColumns = ({cards},columnId) => cards.filter(card => card.columnId == columnId);

// action name creator 
const reducerName = 'cards';

const createActionName = name => `app/${reducerName}/${name}`;

// action types

export const ADD_CARD = createActionName('ADD_CARD');

// action creators 

export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate()}, type: ADD_CARD }); //nawiasy {} mówię o tym, że payload będzie obiektem

// reducer

export default function reducer(statePart = [], action = {}) {
  console.log('działa');
  switch (action.type) {
    case ADD_CARD: 
    console.log(action.payload);
      return [...statePart, action.payload];
    default: 
      return statePart;
  }
}