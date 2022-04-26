import styled from "styled-components";
import { Link } from "react-router-dom";

export const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2% 4%;
`;

export const TitleH1 = styled.h1`
  font-family: "Inter", sans-serif;
`;

export const TitleH2 = styled.h2`
  font-family: "Inter", sans-serif;
`;

export const LowkeyLink = styled(Link)`
  color: unset;
  text-decoration: none;
  transition: text-decoration 1s ease-in-out;
  :hover {
    text-decoration: underline;
    transition: text-decoration 1s ease-in-out;
  }
`;
