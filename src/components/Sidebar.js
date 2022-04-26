import styled from "styled-components";
import { Link } from "react-router-dom";

const SidebarDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  font-family: "Space Mono";
  margin-top: 20px;
`;

const SidebarLink = styled(Link)`
  font-size: 28px;
  color: olive;
  margin: 10px;
  font-weight: bold;
`;

const Sidebar = () => {
  return (
    <SidebarDiv>
      <SidebarLink to="/">back to home</SidebarLink>
      <SidebarLink to="/reilly">01. Reilly</SidebarLink>
      <SidebarLink to="/holly">02. Holly</SidebarLink>
      <SidebarLink to="/aileen">03. Aileen</SidebarLink>
      <SidebarLink to="/kyle">04. Kyle</SidebarLink>
      <SidebarLink to="/ava">05. Ava</SidebarLink>
    </SidebarDiv>
  );
};

export { Sidebar };
