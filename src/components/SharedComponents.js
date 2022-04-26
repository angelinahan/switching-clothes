import styled from "styled-components";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";

export const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2% 4%;
`;

export const PersonPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  //font-family: "Inter", sans-serif;
  width: 70%;
`;

export const Audio = styled.audio`
  margin: 20px 0;
`;

export const TranscriptLink = styled.a`
  margin: 10px 0;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ColGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

export const PersonImage = styled.img`
  width: 80%;
  margin: 20px 0;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const Transcript = styled.p`
  width: 80%;
`;

export const StyledReactModal = styled(ReactModal)`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: 100vh;
  margin: 10vh auto;
`;

export const TitleH1 = styled.h1`
  width: unset;
  //font-family: "Inter", sans-serif;
`;

export const TitleH2 = styled.h2`
  //font-family: "Inter", sans-serif;
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
