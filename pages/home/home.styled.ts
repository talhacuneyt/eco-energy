import styled from "styled-components";

export const HomePage = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
`;

export const ContentImage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    div {
        border-radius: 50%;
        overflow: hidden;

        img {
            transition: 0.5s all;
    
            :hover {
                transform: scale(1.1);
                transition: 0.5s all;
            }
        }
    }
`;

export const ContentButton = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px 50px;
    
    div {
        border: 2px solid #1CCF4E;
        padding: 35px;  
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: calc(50% - 50px);
        cursor: pointer;

        a {
            color: #fff;
            font-size: 20px;
        }

        :hover {
            background-color: #1CCF4E;
            transition-duration: 0.4s;
            a {
                color: #000;
            }
        }
    }
`;