import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, incrementByValue } from "../../action/actions";
import { increment, decrement, incrementByValue } from "../../counterSlice";
function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{count}</h3>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="btn btn-sm btn-primary mx-2"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        className="btn btn-sm btn-success"
        onClick={() => dispatch(incrementByValue(3))}
      >
        Increment By Value
      </button>
    </div>
  );
}

export default Counter;
