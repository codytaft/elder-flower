export const createUserReducer = (state = null, action) => {
  switch (action.type) {
    case 'CREATE_USER_REDUCER':
      return action.user;
    default:
      return state;
  }
};
