import {
  FETCHING_ALL_RETAIL,
  FETCHED_ALL_RETAIL,
  SET_ERROR
} from "../actions/fetchRetail.actions";

const initialState = {
  retailCustomers: "",
  fetching_all_retail: false,
  error: null
};
export default function retailReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_ALL_RETAIL:
      return {
        ...state,
        fetching_all_retail: action.payload
      };
    case FETCHED_ALL_RETAIL:
      return {
        ...state,
        retailCustomers: action.payload
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
