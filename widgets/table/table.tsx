import React from "react";

import { TableProps } from "./types";
import * as Styled from "./table.styled";

const Table: React.FunctionComponent<TableProps> = ({ rows, title }) => {
  return (
    <Styled.Table>
      <h1>{title}</h1>
      <table>
        <tr>
          <th>Hesap yapan kişi</th>
          <th>Tür</th>
          <th>KDV (%)</th>
          <th>Bedel</th>
          <th>Oluşturulma tarihi</th>
        </tr>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{row.who}</td>
            <td>{row.type}</td>
            <td>{row.kdv}</td>
            <td>{row.price}</td>
            <td>{row.createdDate}</td>
          </tr>
        ))}
      </table>
    </Styled.Table>
  );
};

export default Table;
