# `Understand REDUX`

### `What is REDUX?`
REDUX is a global state management which comprises of `store`, `action` and `reducer`


### `1. Store`
The store is the object that is responsible to hold the application state.


### `2. Action`
Action is an object that is sent/dispatch to store. The object must have `type` property and optionally payload property. `Action creator` is a function that is responsible to create the Action object.

### `3. Reducer`
Reducer is responsible to determine the new state based on the action that is sent to reducer.

### `Code Sample`
```javascript
/** src/redux/reducers/counter.js **/
/** setting up reducers **/

// actions
const INCREMENT = "counter/increment";
const DECREMENT = "counter/decrement";

// action creators
export const createIncrementAction = (num = 1) => {
  return {
    type: INCREMENT,
    payload: num,
  };
};

export const createDecrementAction = (num = 1) => {
  return {
    type: DECREMENT,
    payload: num,
  };
};

// counter reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
};
```

```javascript
/** src/redux/store/index.js  **/
/** setting up redux store **/

import { combineReducers, createStore } from "redux";

import * as reducers from "../reducers";

const allReducers = combineReducers(reducers);

const store = createStore(
  allReducers,
  // settings for redux dev tool
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

```javascript
/** src/index.js **/
/** setting redux to work with react project **/

import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
   <!-- Wrap App with Provider and store property -->
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById("root")
);
```

```javascript
/** src/components/Counter.js **/
/** using redux in react Counter component **/

function Counter() {
  // useSelector : to get the state
  const count = useSelector((state) => state.counter);
  // useDispatch : to dispatch action to store
  const dispatch = useDispatch();

  const incrementBy = (num) => {
    return (e) => {
      e.preventDefault();
      dispatch(createIncrementAction(num));
    };
  };

  const decrementBy = (num) => {
    return (e) => {
      e.preventDefault();
      dispatch(createDecrementAction(num));
    };
  };

  return (
    <div>
      <h3>Count: {count}</h3>

      <button onClick={incrementBy(1)}>+</button>
      <button onClick={decrementBy(1)}>-</button>

      <button onClick={incrementBy(5)}>+5</button>
      <button onClick={decrementBy(5)}>-5</button>
    </div>
  );
}
```