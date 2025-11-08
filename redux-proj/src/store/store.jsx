import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/slice.jsx";

export default configureStore({
  reducer: {
    counter: counterSlice,
  },
});
