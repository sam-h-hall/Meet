import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

const store = createStore({}, applyMiddleware(logger)); // add reducer here

export default store;
