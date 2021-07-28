import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
//import { Provider } from "react-redux";
//import store from "./state-management/store";
//import { PersistGate } from "redux-persist/integration/react";
//import { persistStore } from "redux-persist";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

//let persistor = persistStore(store);

//const httpLink = createHttpLink({
//uri: "http://localhost:8000/graphql",
//});

export const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
    {/*</PersistGate>*/}
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
