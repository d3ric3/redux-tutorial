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

export default counterReducer;
