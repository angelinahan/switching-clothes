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
  width: 70%;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const Audio = styled.audio`
  margin: 20px 0;
`;

export const TranscriptLink = styled.button`
  background-color: unset;
  border: none;
  font-family: "Space Mono", sans-serif;
  padding: unset;
  text-align: left;
  font-size: 1em;
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
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const PersonImage = styled.img`
  width: 80%;
  margin: 20px 0;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const Transcript = styled.p`
  width: 80%;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const StyledReactModal = styled(ReactModal)`
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-height: 80vh;
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

export const PDFButton = styled.button`
  width: 100px;
  border-radius: 10px;
  border: 2px solid black;
  background-color: white;
  margin: 0 20px 20px 0;
  padding: 5px;
  font-weight: bold;
  font-family: "Space Mono", sans-serif;
  align-self: flex-end;
  flex-shrink: 1;
  :hover:enabled {
    color: white;
    background-color: black;
  }
  :disabled {
    border: 2px solid lightgray;
  }
`;
