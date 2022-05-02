import styled from "styled-components";
import { Link } from "react-router-dom";
import { LowkeyLink } from "./SharedComponents";

const SidebarDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  font-family: "Space Mono";
  flex-shrink: 0;
  padding-top: 20px;
  border-right: 2px solid olive;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const SidebarLink = styled(Link)`
  color: olive;
  font-weight: bold;
`;

const Sidebar = () => {
  return (
    <SidebarDiv>
      <LowkeyLink to="/">
        <h2>back to home</h2>
      </LowkeyLink>
      <LowkeyLink to="/reilly">
        <h2>01. Reilly</h2>
      </LowkeyLink>
      <LowkeyLink to="/holly">
        <h2>02. Holly</h2>
      </LowkeyLink>
      <LowkeyLink to="/aileen">
        <h2>03. Aileen</h2>
      </LowkeyLink>
      <LowkeyLink to="/kyle">
        <h2>04. Kyle</h2>
      </LowkeyLink>
      <LowkeyLink to="/ava">
        <h2>05. Ava</h2>
      </LowkeyLink>
      <LowkeyLink to="/angelina">
        <h2>Epilogue: Angelina</h2>
      </LowkeyLink>
    </SidebarDiv>
  );
};

export { Sidebar };
