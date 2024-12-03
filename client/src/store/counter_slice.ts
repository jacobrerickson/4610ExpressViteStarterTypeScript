import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of the slice state
interface CounterState {
  value: number;
}

// Define the initial state using the CounterState interface
const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value ++;
    },
    decrement(state) {
      state.value --;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    decrementByAmount(state, action: PayloadAction<number>) {
      state.value -= action.payload;
    },
    reset(state) {
      state.value = 0;
    }
  }
})

export const counterReducer = counterSlice.reducer;
export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset
} = counterSlice.actions;

export const counter = (state: { counter: CounterState }): number => state.counter.value;