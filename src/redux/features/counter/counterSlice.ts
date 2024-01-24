import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface counnterSate {
  count: number;
}

const initialState: counnterSate = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;

export default counterSlice.reducer;
