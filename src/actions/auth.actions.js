export const AUTHENTICATING = "AUTHENTICATING";
export const AUTHENTICATED = "AUTHENTICATED";
export const LOGOUT = "LOGOUT";
export const SET_ERROR = "SET_ERROR";
export const SET_USER = "SET_USER";

export const authenticating = status => ({
  type: AUTHENTICATING,
  payload: status
});

export const authenticated = user => ({
  type: AUTHENTICATED,
  payload: user
});

export const logout = user => ({
  type: LOGOUT,
  payload: user
});

export const setError = err => ({
  type: SET_ERROR,
  payload: err
});

export const setUser = user => ({
  type: SET_USER,
  payload: user
});
