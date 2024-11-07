// import { put, takeLatest } from "redux-saga/effects";
// import { setChartData } from "./chartSlice";

// function* fetchChartData() {
//   // Simulate fetching data
//   const fetchedData = {
//     labels: ["2020", "2021", "2022", "2023"],
//     datasets: [
//       {
//         label: "Users Gained",
//         data: [300, 400, 500, 700],
//         backgroundColor: ["rgba(75,192,192,1)", "#f3ba2f", "#2a71d0"],
//         borderColor: "black",
//         borderWidth: 2,
//       },
//     ],
//   };

//   yield put(setChartData(fetchedData));
// }

// export default function* chartSaga() {
//   yield takeLatest("FETCH_CHART_DATA", fetchChartData);
// }



// chartSaga.js
import {  put, takeLatest } from 'redux-saga/effects';
import { setChartData } from './chartSlice';

function* fetchChartData() {
  try {
    // Simulate fetching data; replace with an API call if needed
    const data = {
      labels: ['2016', '2017', '2018', '2019', '2020'],
      datasets: [
        {
          label: 'Users Gained',
          data: [12000, 19000, 30000, 50000, 20000],
          backgroundColor: ['rgba(75,192,192,1)', '#f3ba2f', '#2a71d0'],
        },
      ],
    };
    yield put(setChartData(data));
  } catch (error) {
    console.error('Failed to fetch chart data:', error);
  }
}

export default function* chartSaga() {
  yield takeLatest('chart/fetchData', fetchChartData);
}
