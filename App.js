import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Navigator from "./src/navigator";
import allReducers from "./src/redux/reducers";
//const mainstore = createStore(allReducers, applyMiddleware(thunk));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const mainstore = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);
// For IOS Things to be done: After this, open the Xcode project configuration and add the Lottie.framework as Embedded Binaries.
export default class App extends React.Component {
  constructor(props) {
    super(props);
    // ...
  }
  addCities = index => {
    // ...
  };

  render() {
    return (
      <Provider store={mainstore}>
        <Navigator />
      </Provider>
    );
  }
}
