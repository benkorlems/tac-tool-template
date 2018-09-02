import { combineReducers } from "redux";

import themeReducer from "./reducers/theme.reducer";
import layoutReducer from "./reducers/layout.reducer";
import authReducer from "./reducers/auth.reducer";
import retailReducer from "./reducers/retail.reducer";
import fiberReducer from "./reducers/fiber.reducer";

// Combine with other reducers we may add in the future
const rootReducer = combineReducers({
  theme: themeReducer,
  layout: layoutReducer,
  auth: authReducer,
  retail: retailReducer,
  fiber: fiberReducer
});

export default rootReducer;
