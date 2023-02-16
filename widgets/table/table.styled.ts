import styled from "styled-components";

export const Table = styled.div`
  * {
    text-align: left;
    color: #fff;
  }

  border: 2px solid #1ccf4a;
  border-radius: 12px;
  padding: 20px;

  h1 {
    border-left: 6px solid #1ccf4a;
    padding-left: 20px;
    margin-bottom: 30px;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
`;
