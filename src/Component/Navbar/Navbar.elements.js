// import { Link } from 'react-router-dom';
import styled from "styled-components";

export const Sub = styled.div`
  width: 100%;

  height: 8rem;
  display: grid;
  grid-template-columns:1fr 1fr;
  background: white;
  clip-path: polygon(
    48% 0,
    51% 40%,
    100% 40%,
    100% 100%,
    80% 100%,
    0 100%,
    0% 80%,
    0 0
  );
  position: absolute;
  top: 0;
  @media only screen and (max-width: 1300px) {
    clip-path: polygon(
      20% 0,
      31% 40%,
      100% 40%,
      100% 100%,
      80% 100%,
      0 100%,
      0% 80%,
      0 0
    );
  }
`;
export const Main = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 1fr 1fr;
  width: 100%;
  height: 7rem;
  background: #292B2C;
  opacity:0.9;
`;
export const Maincall = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 1fr;
    `;
export const Calldetails = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr;
`;
export const Callimage = styled.div``;
export const Callsupport = styled.div`justify-self:'end';
// align-self:'end';
`;
export const Number = styled.div`justify-self:'end`;
export const Col2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
