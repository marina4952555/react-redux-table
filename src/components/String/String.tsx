import React from 'react';
import './index.css';
import { TableDataType } from '../../types';

interface Props {
  tableData: TableDataType;
}

function Srting({ tableData }: Props) {
  return (
    <tr>
      <td className='table__id'>{tableData.id}</td>
      <td className='table__title'>{tableData.title}</td>
      <td className='table__body'>{tableData.body}</td>
    </tr>
  );
}

export default Srting;
