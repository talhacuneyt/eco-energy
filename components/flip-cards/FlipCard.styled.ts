import styled from "styled-components";

export const FlipCard = styled.div`
  width: 350px;
  height: 350px;
  perspective: 1000px;

  :hover div {
    transform: rotateY(180deg);
  }
`;
export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #1ccf4e;
  color: black;
  border-radius: 12px;
`;
export const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;

export const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #1ccf4e;
  color: white;
  transform: rotateY(180deg);
  border-radius: 12px;
  padding: 20px;

  h1 {
    font-size: 18px;
    color: #000;
    margin-bottom: 10px;
  }

  p {
    font-size: 15px;
    color: #000;
    text-align: justify;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical; 
    overflow:hidden;

  }
`;

export const News = styled.span`
  background-color: #9f0000;
  position: absolute;
  bottom: -15px;
  left: 5%;
  height: 15%;
  width: 90%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    background-color: #720c05;

    svg {
      margin-left: 1px;
      transition-duration: 0.4s;
    }

    a {
      background-color: #720c05;
    }
  }

  svg {
    margin-left: -10px;
    z-index: 1;
    transition-duration: 0.4s;
  }

  a {
    padding: 3px 10px;
    overflow: hidden;
    background-color: #9f0000;
    z-index: 2;
  }
`;
