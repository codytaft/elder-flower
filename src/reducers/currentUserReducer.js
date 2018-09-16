export const currentUserReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return action.user;
    default:
      return state;
  }
};