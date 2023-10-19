import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import postSlice from "./postSlice";
import themeSlice from "./themeSlice";

const rootReducer = combineReducers({
  user: userSlice,
  post: postSlice,
  theme: themeSlice,
});

export { rootReducer };
