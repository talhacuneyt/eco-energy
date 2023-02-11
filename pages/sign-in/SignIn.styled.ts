import styled from "styled-components";

export const SignIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;

  input {
    width: 600px;
    border: none;
    border: 2px solid #1ccf4e;
    background-color: transparent;
    padding: 20px;
    margin-bottom: 20px;
    outline: none;
    color: #fff;
    transition: all 0.4s;
    cursor: text;

    ::placeholder {
      color: #fff;
    }

    :nth-last-child(1):hover {
      background-color: #1ccf4e;
      transition: all 0.4s;
      cursor: pointer;
    }
  }
`;
