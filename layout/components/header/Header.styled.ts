import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 100px;
  background-color: #1ccf4e;
  position: relative;
  width: 100%;

  div {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      padding: 10px 15px;
      border: 2px solid transparent;
      border-radius: 12px;
      margin-right: 10px;

      :hover {
        border: 2px solid;
      }

      svg {
        margin-right: 10px;
      }

      :nth-child(1) {
        border: 2px solid #000;
        border-radius: 12px;
        z-index: 1;

        p {
          z-index: 2;
          background-color: #1ccf4e;
        }

        svg {
          margin-right: -16px;
          z-index: 1;
          transition-duration: 0.3s;
        }

        :hover {
          background-color: #000;
          color: #1ccf4e;

          p {
            background-color: #000;
            color: #1ccf4e;
          }

          svg {
            margin-right: 5px;
            transition-duration: 0.3s;
          }
        }
      }

      :last-child {
        margin-right: 0;
      }
    }
  }
`;
