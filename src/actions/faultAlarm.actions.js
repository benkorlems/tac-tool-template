export const FETCHING_FAULT_ALARM = "FETCHING_FAULT_ALARM";
export const FETCHED_FAULT_ALARM = "FETCHED_FAULT_ALARM";
export const FAULT_ALARM_ERROR = "SET_ERROR";

export const fetching_fault_alarm = status => ({
  type: FETCHING_FAULT_ALARM,
  payload: status
});

export const fetched_fault_alarm = retail_data => ({
  type: FETCHED_FAULT_ALARM,
  payload: retail_data
});

export const faultAlarmError = err => ({
  type: FAULT_ALARM_ERROR,
  payload: err
});
