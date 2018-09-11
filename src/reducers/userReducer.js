export const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return action.user;
    case 'CREATE_ELDER':
      return action.user;
    case 'CREATE_CARER':
      return action.user;
    default:
      return state;
  }
};
