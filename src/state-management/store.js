import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./state-slices/user-slice";

const persistConfig = {
  key: "root",
  storage
};
const reducers = combineReducers({
  user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);
//combineReducers()
export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, thunk),
  devTools: "development",
});
