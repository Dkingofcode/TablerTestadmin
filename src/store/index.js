// import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
// import chartReducer from "./chartSlice";
// import chartSaga from "./sagaChart";

// const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({
//   reducer: {
//     chart: chartReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
// });

// sagaMiddleware.run(chartSaga);

// export default store;


// store.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import chartReducer from './chartSlice';
import chartSaga from './sagaChart.js';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    chart: chartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(chartSaga);

export default store;








