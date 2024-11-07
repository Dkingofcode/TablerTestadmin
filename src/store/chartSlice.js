// import { createSlice } from "@reduxjs/toolkit";



// const initialState = {
//     labels: [], 
//     datasets: []
//   };

// const chartSlice = createSlice({
//   name: "chart",
//   initialState,
//   reducers: {
//     setChartData: (state, action) => {
//        return action.payload;
//     },
//   },
// });

// export const { setChartData } = chartSlice.actions;
// export default chartSlice.reducer;






// chartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const chartSlice = createSlice({
  name: 'chart',
  initialState: {
    data: {
      labels: [],
      datasets: [],
    },
  },
  reducers: {
    setChartData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setChartData } = chartSlice.actions;
export default chartSlice.reducer;
