import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createIncrementAction,
  createDecrementAction,
} from "../redux/reducers/counter";

function Counter() {
  const count = useSelector((state) => state.counter);
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

export default Counter;
