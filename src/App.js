import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img1 from "./image/covers/1.png";
import img2 from "./image/covers/2.png";
import img3 from "./image/covers/3.png";
import img4 from "./image/covers/4.png";
import img5 from "./image/covers/5.png";
import img6 from "./image/covers/6.png";
import { AppHeader } from "./components/AppHeader";
import {
  AppContainer,
  LowkeyLink,
  TitleH2,
} from "./components/SharedComponents";

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
  width: 100%;
  flex-wrap: wrap;
`;

const ItemContainer = styled.div`
  width: 30%;
  &:hover {
    transform: rotate(2deg);
    transition: transform 0.2s;
  }
  @media only screen and (max-width: 600px) {
    width: 45%;
  }
`;

const CoverImg = styled.img`
  max-width: 100%;
  height: auto;
`;

const App = () => {
  return (
    <AppContainer>
      <AppHeader />
      <ContentContainer>
        <ContentRow>
          <ItemContainer>
            <LowkeyLink to="/reilly">
              <TitleH2>01. Reilly</TitleH2>
              <CoverImg src={img1} alt="covers" />
            </LowkeyLink>
          </ItemContainer>
          <ItemContainer>
            <LowkeyLink to="/holly">
              <TitleH2>02. Holly</TitleH2>
              <CoverImg src={img2} alt="covers" />
            </LowkeyLink>
          </ItemContainer>
          <ItemContainer>
            <LowkeyLink to="/aileen">
              <TitleH2>03. Aileen</TitleH2>
              <CoverImg src={img3} alt="covers" />
            </LowkeyLink>
          </ItemContainer>
          <ItemContainer>
            <LowkeyLink to="/kyle">
              <TitleH2>04. Kyle</TitleH2>
              <CoverImg src={img4} alt="covers" />
            </LowkeyLink>
          </ItemContainer>
          <ItemContainer>
            <LowkeyLink to="/ava">
              <TitleH2>05. Ava</TitleH2>
              <CoverImg src={img5} alt="covers" />
            </LowkeyLink>
          </ItemContainer>
          <ItemContainer>
            <LowkeyLink to="/angelina">
              <TitleH2>Epilogue: Angelina</TitleH2>
              <CoverImg src={img6} alt="covers" />
            </LowkeyLink>
          </ItemContainer>
        </ContentRow>
      </ContentContainer>
    </AppContainer>
  );
};

export default App;
