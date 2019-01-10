// Reducer is being called whenever an action is being called
// State argument is not application state, only the state this reducer is responsible for.

// Set state to null, because when the app is first opened, the state is undefined, and which redux will
// throw an error, instead, return null.
export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  // Never mutate state
  return state;
}