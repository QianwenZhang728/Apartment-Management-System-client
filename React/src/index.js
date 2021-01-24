import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css"
import App from "./App";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import ResidentLoginReducer from "./reducers/residentLoginReducer";
import AdminLoginReducer from "./reducers/adminLoginReducer"

const reducers = combineReducers({
    ResidentLoginReducer, AdminLoginReducer
})

const store = createStore(reducers)

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </Provider>,
  rootElement
);
