import { combineReducers, createStore } from "redux";

import * as reducers from "../reducers";

/*
state name in REDUX is determine at combineReducers

Example to have myCount state: 
const allReducers = combineReducers({
  myCount: counterReducer
});

const store = createStore(allReducers);

const count = useSelector(state => state.myCount);
*/

const allReducers = combineReducers(reducers);

const store = createStore(
  allReducers,
  // settings for redux dev tool
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
