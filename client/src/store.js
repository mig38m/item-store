import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers/reducer";
import thunk from "redux-thunk";


const initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, compose(
  applyMiddleware(...middleware)
));

export default store;