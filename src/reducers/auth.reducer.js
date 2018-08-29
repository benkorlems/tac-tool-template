import isEmpty from "../validation/isEmpty";

import {
  AUTHENTICATING,
  AUTHENTICATED,
  SET_ERROR,
  SET_USER
} from "../actions/auth.actions";

const initialState = {
  authenticated: false,
  authenticating: false,
  user: null,
  error: null
};
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATING:
      return {
        ...state,
        authenticating: action.payload
      };
    case AUTHENTICATED:
      return {
        ...state,
        authenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
