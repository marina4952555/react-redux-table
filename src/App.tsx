import React, { useEffect } from 'react';
import './App.css';
import './fonts.css';
import Search from './components/Search';
import Table from './components/Table';
import { useAppDispatch } from './redux/hooks';
import { getAllTableData } from './redux/tableData/thunks';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllTableData());
  }, [dispatch]);
  return (
    <main>
      <Search />
      <Table />
    </main>
  );
}

export default App;
