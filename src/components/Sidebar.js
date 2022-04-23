import styled from "styled-components";
import { Link } from "react-router-dom";

const SidebarDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Sidebar = () => {
  return (
    <SidebarDiv>
      <Link to="/">back to home</Link>
      <Link to="/reilly">01. Reilly</Link>
      <Link to="/holly">02. Holly</Link>
      <Link to="/aileen">03. Aileen</Link>
      <Link to="/kyle">04. Kyle</Link>
      <Link to="/ava">05. Ava</Link>
    </SidebarDiv>
  );
};

export { Sidebar };
