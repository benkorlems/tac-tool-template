export const FETCHING_ALL_RETAIL = "FETCHING_ALL_RETAIL";
export const FETCHED_ALL_RETAIL = "FETCHED_ALL_RETAIL";
export const SET_ERROR = "SET_ERROR";

export const fetching_all_retail = status => ({
  type: FETCHING_ALL_RETAIL,
  payload: status
});

export const fetched_all_retail = retail_data => ({
  type: FETCHED_ALL_RETAIL,
  payload: retail_data
});

export const setError = err => ({
  type: SET_ERROR,
  payload: err
});
