import React from "react";
import { useReducer } from "react";

const actions = {
  DEC: "DEC",
  INC: "INC",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.DEC:
      return { count: state.count - action.payload };
    case actions.INC:
      return { count: state.count + action.payload };
    default:
      throw new Error();
  }
};

const UseReducer = () => {
  let initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "DEC", payload: 10 });
        }}
      >
        SUB
      </button>
      {state.count}
      <button
        onClick={() => {
          dispatch({ type: "INC", payload: 10 });
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default UseReducer;
