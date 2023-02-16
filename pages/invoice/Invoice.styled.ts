import styled from "styled-components";

export const Invoice = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 50px;

  & > div:nth-child(2) {
    & > div {
      display: flex;
      flex-direction: row;
    }
  }
`;

export const Table = styled.div`
  padding: 40px 160px;
`;
