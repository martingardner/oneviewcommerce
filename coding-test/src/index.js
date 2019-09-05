import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import AppReducers from "./reducers/reducers";
import Main from "./containers/main";

const store = createStore(AppReducers);

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);
