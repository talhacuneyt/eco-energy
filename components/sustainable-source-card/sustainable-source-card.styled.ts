import styled from "styled-components";

export const SustainableSourceCard = styled.div`
  * {
    color: #fff;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px;

  & > img {
    object-fit: cover;
    background-color: #1ccf4a;
    border-radius: 12px;
  }

  & > div:last-child {
    margin-left: 20px;

    b {
      font-size: 19px;
    }

    p {
      margin-top: 12px;
      font-size: 14px;
    }
  }
`;
