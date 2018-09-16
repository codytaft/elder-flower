export const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'CREATE_ELDER':
      return action.user;
    case 'CREATE_CARER':
      return action.user;
    default:
      return state;
  }
};
