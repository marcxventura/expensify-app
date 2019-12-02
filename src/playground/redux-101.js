import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
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
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions - an object that gets sent to the store

// increment, decrement, reset

// increment the count
store.dispatch({
  type: "INCREMENT",
  incrementBy: 5
});

// unsubscribe();

// increment the count
store.dispatch({
  type: "INCREMENT"
});

// reset the count
store.dispatch({
  type: "RESET"
});

// decrement the count
store.dispatch({
  type: "DECREMENT"
});

store.dispatch({
  type: "DECREMENT",
  decrementBy: 10
});

// end result of -11

store.dispatch({
  type: "SET",
  count: 101
});

// sets count to 101
