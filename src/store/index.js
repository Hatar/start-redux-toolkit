import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
// import reducers from "../reducer";
// import counter from "../reducer/counter";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../counterSlice";
const enhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// const store = createStore(reducers, enhance(applyMiddleware(reduxThunk)));

const store = configureStore({ reducer: { counter: counterSlice } }, enhance);

export { store };
