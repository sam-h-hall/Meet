import {
  combineReducers,
  configureStore,
  createAction,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./state-slices/user-slice";
const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  user: userSlice,
});

export const resetAction: any = createAction("reset");

const resettableReducer = (state: any, action: any) => {
  if (resetAction.match(action)) {
    return reducers(undefined, action);
  }
  return reducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, resettableReducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, thunk),
  devTools: true,
});
