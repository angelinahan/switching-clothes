import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img1 from "./image/covers/1.png";
import img2 from "./image/covers/2.png";
import img3 from "./image/covers/3.png";
import { ItemPage } from "./pages/Holly";

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ItemLink = styled(Link)``;

const ItemContainer = styled.div`
  width: 30%;
  margin: 1%;
  border: 2px solid olive;

  &:hover {
    transform: rotate(2deg);
    transition: transform 0.2s;
  }
`;

const CoverImg = styled.img`
  max-width: 100%;
  height: auto;
`;

const App = () => {
  return (
    <div className="App">
      <HeaderDiv>
        <h1>A Day in Your Clothes</h1>
        <p>~ brief explaination of the project here ~</p>
      </HeaderDiv>
      <ContentContainer>
        <ItemContainer>
          <Link to="reilly">
            <h2>01. Reilly</h2>
            <CoverImg src={img1} alt="covers" />
          </Link>
        </ItemContainer>
        <ItemContainer>
          <Link to="holly">
            <h2>02. Holly</h2>
            <CoverImg src={img2} alt="covers" />
          </Link>
        </ItemContainer>
        <ItemContainer>
          <Link to="aileen">
            <h2>03. Aileen</h2>
            <CoverImg src={img3} alt="covers" />
          </Link>
        </ItemContainer>
        <ItemContainer>
          <Link to="kyle">
            <h2>04. Kyle</h2>
            <CoverImg src={img1} alt="covers" />
          </Link>
        </ItemContainer>
        <ItemContainer>
          <Link to="ava">
            <h2>05. Ava</h2>
            <CoverImg src={img2} alt="covers" />
          </Link>
        </ItemContainer>
        <ItemContainer>
          <Link to="final-thoughts">
            <h2>final thoughts</h2>
          </Link>
        </ItemContainer>
      </ContentContainer>
    </div>
  );
};

export default App;
