import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TableDataType } from '../../types';

export const getAllTableData = createAsyncThunk('getAllTableData', async () => {
  try {
    const response = await axios.get<TableDataType[]>(
      'https://jsonplaceholder.typicode.com/posts ',
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
});

export const getFilteredTableData = createAsyncThunk(
  'getFilteredTableData',
  async (searchText: string) => {
    const preparedText = searchText.toLowerCase();

    try {
      const response = await axios.get<TableDataType[]>(
        'https://jsonplaceholder.typicode.com/posts ',
      );

      const filtredTableDatas = response.data.filter(
        (TableData) =>
          TableData.title.toLowerCase().includes(preparedText) ||
          TableData.body.toLowerCase().includes(preparedText),
      );

      return filtredTableDatas;
    } catch (e) {
      console.log(e);
    }
  },
);
