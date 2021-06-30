//import { applyMiddleware, createStore } from "redux";
//import logger from "redux-logger";
import loginReducer from "./reducers/login-reducer";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";

//const store = createStore(loginReducer, applyMiddleware(logger)); // add reducer here

export default configureStore({
  reducer: loginReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, thunk),
  devTools: "development",
});
