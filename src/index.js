import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./configureStore.js";

import App from "./container/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
