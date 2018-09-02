import {
  fetching_all_retail,
  fetched_all_retail,
  setError
} from "../actions/fetchRetail.actions";
// import the axios api
import axios from "axios";

// Log User in
export const fetchRetail = () => dispatch => {
  dispatch(fetching_all_retail(true));
  axios
    .get("http://62.173.38.4:5000/api/billing/all_billing")
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
    .catch((
      err // Stop fetching
    ) => {
      dispatch(fetching_all_retail(false));
      dispatch(setError(err));
    });
};
// Clear Error
export const clearError = () => dispatch => {
  dispatch(setError(""));
};
