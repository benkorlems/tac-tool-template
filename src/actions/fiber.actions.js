export const FETCHING_FIBER = "FETCHING_FIBER";
export const FETCHED_FIBER = "FETCHED_FIBER";
export const FIBER_ERROR = "FIBER_ERROR";

export const fetching_fiber = status => ({
  type: FETCHING_FIBER,
  payload: status
});

export const fetched_fiber = fiber_data => ({
  type: FETCHED_FIBER,
  payload: fiber_data
});

export const fiberError = err => ({
  type: FIBER_ERROR,
  payload: err
});
