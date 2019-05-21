import * as types from "./actions";
const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      return Object.assign({}, state, {
        token: localStorage.getItem("token")
      });
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: localStorage.getItem("token")
      };
    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        status: action.status
      };
    default:
      return state;
  }
};
export default rootReducer;
