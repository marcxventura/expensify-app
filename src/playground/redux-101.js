import { createStore } from "redux";

// const add = ({ a, b }) => {
//   return a + b;
// };

// console.log(add({ a: 1, b: 12 }));

// Action generators - functions that return action objects
// This method makes it easier to avoid typos by allowing Reference Errors
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const setCount = ({ count }) => ({
  type: "SET",
  count
});

const resetCount = () => ({
  type: "RESET"
});

// Reducers
// 1. Reducers are pure functions
//    Pure functions only interact within it's own scope and the result is dependent soley on the input
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "SET":
      return {
        count: action.count
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
  // IF statement can also be used, but SWITCH is more commonly used
  //
  //   if (action.type === "INCREMENT") {
  //     return {
  //       count: state.count + 1
  //     };
  //   } else {
  //     return state;
  //   }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions - an object that gets sent to the store

// increment, decrement, reset

// increment the count
// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

// Calling action generator
store.dispatch(incrementCount({ incrementBy: 5 }));

// unsubscribe();

// increment the count
store.dispatch(incrementCount());

// reset the count
store.dispatch(resetCount());

// decrement the count
store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

// end result of -11

store.dispatch(setCount({ count: 101 }));

// sets count to 101
