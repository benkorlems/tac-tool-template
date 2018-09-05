import {
  FETCHING_FAULT_ALARM,
  FETCHED_FAULT_ALARM,
  FAULT_ALARM_ERROR
} from "../actions/faultAlarm.actions";

const initialState = {
  fault_alarm_data: "",
  fetching_fault_alarm: false,
  fault_alarm_error: null
};
export default function faultAlarmReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_FAULT_ALARM:
      return {
        ...state,
        fetching_fault_alarm: action.payload
      };
    case FETCHED_FAULT_ALARM:
      return {
        ...state,
        fault_alarm_data: action.payload
      };
    case FAULT_ALARM_ERROR:
      return {
        ...state,
        fault_alarm_error: action.payload
      };
    default:
      return state;
  }
}
