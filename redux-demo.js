import redux from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    console.log("action increment");
    return { counter: state.counter + 1 };
  }
  if (action.type === "decrement") {
    console.log("action decrement");
    return { counter: state.counter - 1 };
  }
  console.log("action");

  return state;
};
const store = redux.createStore(counterReducer);

const latestState = store.getState();
console.log(latestState);
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};
store.subscribe(counterSubscriber);
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
