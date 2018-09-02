import {
  FETCHING_FIBER,
  FETCHED_FIBER,
  FIBER_ERROR
} from "../actions/fiber.actions";

const initialState = {
  fiber_data: "",
  fetching_fiber: false,
  fiber_error: null
};
export default function fiberReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_FIBER:
      return {
        ...state,
        fetching_fiber: action.payload
      };
    case FETCHED_FIBER:
      return {
        ...state,
        fiber_data: action.payload
      };
    case FIBER_ERROR:
      return {
        ...state,
        fiber_error: action.payload
      };
    default:
      return state;
  }
}
