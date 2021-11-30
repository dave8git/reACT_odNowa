// selectors
export const getSearchString = ({searchString}) => searchString;
export const countAllCards = ({cards}) => cards.length;
export const countVisibleCards = ({cards}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title))
// action name creator

// actions types

// action creators

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}

