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
        labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
        datasets: [
          {
            label: "Dataset 1",
            data: [12, 19, 3, 5, 2],
            backgroundColor: "rgba(75, 192, 192, 0.2)", // Set to a single color string
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
          },
        ],
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
