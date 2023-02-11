import styled from "styled-components";

export const CardContent = styled.div`
  height: 90vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 50px;
  gap: 50px;
`;

export const DetailContent = styled.div`
  padding: 50px;
  color: #fff;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    img {
      background-color: #1ccf4e;
      border-radius: 50%;
      margin-right: 20px;
      padding: 10px;
    }
  }

  p,
  h2,
  a {
    margin-bottom: 20px;
  }

  a {
    width: max-content;
    display: flex;
    align-items: center;
    background-color: transparent;
    border: 2px solid #1ccf4e;
    padding: 15px;
    border-radius: 50%;
    transition: all 0.4s;

    :hover {
      background-color: #1ccf4e;
      transition: all 0.4s;
    }
  }

  p {
    margin-left: 20px;

    ul {
    }
  }
`;
