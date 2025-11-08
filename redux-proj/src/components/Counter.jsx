import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../slice/slice";

function Counter() {
  const count = useSelector((all) => all.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
    </>
  );
}
export default Counter;
