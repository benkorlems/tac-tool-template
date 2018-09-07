import {
  fetching_fault_alarm,
  fetched_fault_alarm,
  faultAlarmError
} from "../actions/faultAlarm.actions";
// import the axios api
import axios from "axios";

export const fetchFaultAlarm = olt_details => dispatch => {
  dispatch(fetching_fault_alarm(true));
  axios
    .get("http://62.173.38.4:5000/api/alarms/get_alarms", {
      params: {
        olt: olt_details.olt,
        slot: olt_details.slot,
        port: olt_details.port
      }
    })
    .then(res => {
      dispatch(fetched_fault_alarm(res.data));
      dispatch(fetching_fault_alarm(false));
    })
    .catch(err =>
      // Stop fetching
      {
        dispatch(fetching_fault_alarm(false));
        dispatch(faultAlarmError(err));
      }
    );
};
// Clear Error
export const clearFaultAlarmError = () => dispatch => {
  dispatch(faultAlarmError(""));
};
