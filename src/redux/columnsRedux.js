import shortid from 'shortid';
import { getAllCardsForColumn } from './cardsRedux.js';
// selectors 
export const getColumnsForList = ({columns},listId) => columns.filter(column => column.listId == listId);

export const getColumnsWithCards = state => { //selektor który zbiera kolumny i dodaje do nich tablicę kart
  const { columns } = state;
  console.log('columns in getColumnsWithCards before change, only columns', columns);
  const modified = columns.map(column => {
    const cards = getAllCardsForColumn(state, column.id);
    return { ...column, cards };
  });
  return modified;
};

// action name creator 
const reducerName = 'columns';

const createActionName = name => `app/${reducerName}/${name}`;

// action types

export const ADD_COLUMN = createActionName('ADD_COLUMN');

// action creators 

export const createActionAddColumn = payload => ({ payload: { ...payload, id: shortid.generate()}, type: ADD_COLUMN }); //nawiasy {} mówię o tym, że payload będzie obiektem

// reducer

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_COLUMN: 
      return [...statePart, action.payload];
    default: 
      return statePart;
  }
}