import {
  authenticating,
  authenticated,
  logout,
  setError,
  setUser
} from "../actions/auth.actions";
import UserApi from "../assets/data/apps/contacts/UserApi";

// Log User in
export const loginUser = userData => dispatch => {
  dispatch(authenticating(true));
  UserApi.getUser(userData)
    .then(res => {
      // Save to localStorage
      const user = res;
      // Set token to ls
      localStorage.setItem("user", user);
      // Stop authenticating
      dispatch(authenticating(false));
      // Set current user
      dispatch(setUser(user));
      dispatch(authenticated(true));
    })
    .catch(err =>
      // Stop authentication
      {
        dispatch(authenticating(false));
        dispatch(setError(err));
      }
    );
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("user");
  // Set current user to {} which will set isAuthenticated to false
  dispatch(authenticated({}));
};
// Clear Error
export const clearError = () => dispatch => {
  dispatch(setError(""));
};
