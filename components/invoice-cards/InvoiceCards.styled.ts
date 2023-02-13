import styled from "styled-components";

export const InvoiceCards = styled.div`
  padding: 20px;
  border: 2px solid #1ccf4a;
  border-radius: 12px;
  margin-bottom: 30px;
  color: #fff;
  width: 100%;

  h1 {
    border-left: 6px solid #1ccf4a;
    padding-left: 20px;
    margin-bottom: 30px;
  }

  div {
    display: flex;
    align-items: center;

    input,
    a {
      padding: 10px;
      border: 2px solid #1ccf4a;
      border-radius: 12px;
      margin-right: 30px;
      color: #fff;
    }

    input {
      background-color: transparent;
    }

    a {
      display: flex;
      align-items: center;
      transition: 0.4s all;

      :hover {
        background-color: #1ccf4a;
        transition: 0.4s all;
        color: #000;

        svg {
          margin-left: 0;
          transition: 0.4s all;
        }

        p {
          background-color: #1ccf4a;
          transition: 0.4s all;
        }
      }

      p {
        z-index: 9;
        background-color: #000;
        transition: 0.4s all;
      }

      svg {
        margin-left: -15px;
        transition: 0.4s all;
      }
    }
  }
`;
