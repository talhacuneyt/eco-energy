import styled from "styled-components";

export const Country = styled.div`
  padding: 50px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;

  & > div {
    width: calc((100% / 2) - 10px);
  }

  & > div:not(:last-child) {
    border-bottom: 0.5px solid #fff;
  }
`;
