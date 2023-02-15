import styled from "styled-components";

export const CityBar = styled.div`
  padding: 20px;
  border: 2px solid #1ccf4a;
  border-radius: 12px;
  color: #fff;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  width: 300px;

  h1 {
    border-left: 6px solid #1ccf4a;
    padding-left: 20px;
    margin-bottom: 30px;
  }

  & > div {
    padding: 20px;
    border: 2px solid #1ccf4a;
    border-radius: 12px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    position: relative;

    & > div:nth-child(1) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }

    & > div:nth-child(2) {
      position: absolute;
      left: 0;
      top: calc(100% + 12px);
      border: 2px solid #1ccf4a;
      border-radius: 12px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      width: 100%;
      background-color: #000;
      height: 335px;
      overflow: hidden;
      overflow-x: scroll;
      overflow-y: scroll;
      animation-name: open;
      animation-duration: 1s;

      @keyframes open {
        0% {
          height: 0;
        }
        100% {
          height: 335px;
        }
      }

      button {
        width: 100%;
        padding: 12px 20px;
        color: #fff;

        p {
          text-align: left;
        }

        :hover {
          background-color: #1ccf4a;
          color: #000;
        }
      }
    }
  }
`;
