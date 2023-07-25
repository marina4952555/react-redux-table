import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import ReactPaginate from 'react-paginate';
import './index.css';
import Srting from '../String';
import { sortTableList } from '../../redux/tableData/tableDataSlice';
import { TableDataType } from '../../types';

const ITEMS_PER_PAGE = 10;

function Table() {
  const [itemOffset, setItemOffset] = useState(0);
  const [currentSort, setCurrentSort] = useState('');

  const { tableDataList } = useAppSelector((state) => ({
    tableDataList: state.tableDataList,
  }));
  const dispatch = useAppDispatch();

  const endOffset = itemOffset + ITEMS_PER_PAGE;
  const currentItems = tableDataList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(tableDataList.length / ITEMS_PER_PAGE);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * ITEMS_PER_PAGE) % tableDataList.length;
    setItemOffset(newOffset);
  };

  const handleSortClick = (key: keyof TableDataType) => {
    dispatch(sortTableList({ key, isReverse: currentSort === key }));
    setCurrentSort((prev) => (prev === key ? '' : key));
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSortClick('id')}>
              <p>
                <span>ID</span>
                <svg width='12' height='7' viewBox='0 0 12 7' fill='none'>
                  <line
                    x1='0.353553'
                    y1='0.646447'
                    x2='6.18011'
                    y2='6.47301'
                    stroke='#FCFCFC'
                  />
                  <line
                    x1='5.64645'
                    y1='6.30331'
                    x2='11.3033'
                    y2='0.646453'
                    stroke='white'
                  />
                </svg>
              </p>
            </th>
            <th onClick={() => handleSortClick('title')}>
              <p>
                <span>Заголовок</span>
                <svg width='12' height='7' viewBox='0 0 12 7' fill='none'>
                  <line
                    x1='0.353553'
                    y1='0.646447'
                    x2='6.18011'
                    y2='6.47301'
                    stroke='#FCFCFC'
                  />
                  <line
                    x1='5.64645'
                    y1='6.30331'
                    x2='11.3033'
                    y2='0.646453'
                    stroke='white'
                  />
                </svg>
              </p>
            </th>
            <th onClick={() => handleSortClick('body')}>
              <p>
                <span>Описание</span>
                <svg width='12' height='7' viewBox='0 0 12 7' fill='none'>
                  <line
                    x1='0.353553'
                    y1='0.646447'
                    x2='6.18011'
                    y2='6.47301'
                    stroke='#FCFCFC'
                  />
                  <line
                    x1='5.64645'
                    y1='6.30331'
                    x2='11.3033'
                    y2='0.646453'
                    stroke='white'
                  />
                </svg>
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((tableData) => (
            <Srting tableData={tableData} key={tableData.id} />
          ))}
        </tbody>
      </table>
      <ReactPaginate
        className='pagination'
        breakLabel='...'
        nextLabel='Далее'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel='Назад'
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Table;
