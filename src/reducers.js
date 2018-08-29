import { combineReducers } from "redux";

import themeReducer from "./reducers/theme.reducer";
import layoutReducer from "./reducers/layout.reducer";
import authReducer from "./reducers/auth.reducer";

// Combine with other reducers we may add in the future
const rootReducer = combineReducers({
  theme: themeReducer,
  layout: layoutReducer,
  auth: authReducer
});

export default rootReducer;
