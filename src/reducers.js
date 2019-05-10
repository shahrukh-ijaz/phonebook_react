import * as types from "./actions";

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      return Object.assign({}, state, {
        token: action.data.token
      });
    case types.LOGIN_USER_SUCCESS:
      console.log("data: ", action);
      return {
        ...state,
        token: action.token
      };
    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user
      };
    case types.LOGIN_USER_ERROR:
      return { ...state, error: action.payload.error };
    case types.REGISTER_USER_ERROR:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};

export default rootReducer;
