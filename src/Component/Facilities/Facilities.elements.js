import styled, { css, keyframes } from "styled-components";

const slideAnimation1 = keyframes`
0% { margin-left:0% }

100% { margin-left:0% }
`;
const slideAnimation2 = keyframes`
0% { margin-left:0% }

100% { margin-left:-100% }
`;
const slideAnimation3 = keyframes`
0% { margin-left:-100% }

100% { margin-left:-200% }
`;

export const Main = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
`;

export const Sub = styled.div`
  position: relative;
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-evenly;
  padding: 50px;
  width: 300%;
  animation: ${({ ChangeAnimation1 }) =>
    ChangeAnimation1
      ? css`
          ${slideAnimation1}
        `
      : ""};
  animation: ${({ ChangeAnimation2 }) =>
    ChangeAnimation2
      ? css`
          ${slideAnimation2}
        `
      : ""};
  animation: ${({ ChangeAnimation3 }) =>
    ChangeAnimation3
      ? css`
          ${slideAnimation3}
        `
      : ""};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  transition-timing-function: ease-out;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const P = styled.p`
  text-align: center;
  margin-top: 140px;
`;
export const H1 = styled.h1`
  text-align: center;
`;

//Component

export const Subcomponent = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex-basis: 250px;
  // border:1px solid #111;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.09), 0 5px 12px 0 rgba(0, 0, 0, 0.09);
  cursor: pointer;
  border-radius: 5px;
  padding: 30px;
`;

export const Imagecomponent = styled.img`
  height: 220px;
  width: 250px;
  border-radius: 10px;
`;

export const Headingcomponent = styled.div`
  font-size: 20px;
  padding: 3px;
`;

export const Descriptioncomponent = styled.div`
  padding: 3px;
`;

export const Dots = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
`;
export const Dot1 = styled.div`
  border: 4px solid;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  cursor: pointer;
  border-color: ${({ ChangeAnimation1 }) =>
    ChangeAnimation1 ? "red" : "green"};
`;
export const Dot2 = styled.div`
  border: 4px solid red;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  cursor: pointer;
  border-color: ${({ ChangeAnimation2 }) =>
    ChangeAnimation2 ? "red" : "green"};
`;
export const Dot3 = styled.div`
  border: 4px solid red;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  cursor: pointer;
  border-color: ${({ ChangeAnimation3 }) =>
    ChangeAnimation3 ? "red" : "green"};
`;
