import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TableDataType } from '../../types';
import { getAllTableData, getFilteredTableData } from './thunks';

const initialState = [] as TableDataType[];

const tableDataListSlice = createSlice({
  name: 'tableDataList',
  initialState,
  reducers: {
    sortTableList: (
      state,
      action: PayloadAction<{ key: keyof TableDataType; isReverse: boolean }>,
    ) => {
      const { key, isReverse } = action.payload;

      if (isReverse) {
        state.sort((a, b) => (a[key] > b[key] ? 1 : -1));
      } else {
        state.sort((a, b) => (a[key] > b[key] ? -1 : 1));
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllTableData.fulfilled, (state, action) => {
      if (action.payload) {
        return action.payload;
      }
    });
    builder.addCase(getFilteredTableData.fulfilled, (state, action) => {
      if (action.payload) {
        return action.payload;
      }
    });
  },
});

export const { sortTableList } = tableDataListSlice.actions;

export default tableDataListSlice.reducer;
