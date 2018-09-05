import {
  fetching_fiber,
  fetched_fiber,
  fiberError
} from "../actions/fiber.actions";
// import the axios api
import axios from "axios";

// Log User in
export const fetchFiber = serial => dispatch => {
  dispatch(fetching_fiber(true));
  axios
    .get("http://localhost:5000/api/ont/ont_status", {
      params: {
        serial: serial
      }
    })
    .then(res => {
      dispatch(fetching_fiber(false));
      dispatch(fetched_fiber(res.data));
    })
    .catch(err =>
      // Stop fetching
      {
        dispatch(fetching_fiber(false));
        dispatch(fiberError(err));
      }
    );
};

/** 
export const searchRetail = search_term => dispatch => {
  dispatch(fetching_all_retail(true));
  axios
    .get("http://localhost:5000/api/billing/search_billing", {
      params: {
        search_term: search_term
      }
    })
    .then(res => {
      dispatch(fetched_all_retail(res.data));
      dispatch(fetching_all_retail(false));
    })
    .catch(err =>
      // Stop fetching
      {
        dispatch(fetching_all_retail(false));
        dispatch(setError(err));
      }
    );
}; 

*/

// Clear Error
export const clearFiberError = () => dispatch => {
  dispatch(fiberError(""));
};
