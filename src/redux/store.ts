import { configureStore } from '@reduxjs/toolkit';
import tableDatasListSlice from './tableData/tableDataSlice';

export const store = configureStore({
  reducer: {
    tableDataList: tableDatasListSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
