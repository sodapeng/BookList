// Contain all action creators

export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action.
  // An object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}