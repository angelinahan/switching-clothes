import styled from "styled-components";
import { LowkeyLink } from "./SharedComponents";

const HeaderDiv = styled.div`
  display: flex;
  font-family: "Space Mono";
  width: 100%;
  border-bottom: 2px solid olive;
  justify-content: space-between;
`;

const AppHeader = () => {
  return (
    <HeaderDiv>
      <LowkeyLink to="/">
        <h1>A Day in Your Clothes</h1>
      </LowkeyLink>
      <LowkeyLink to="/about">
        <h2>about the project</h2>
      </LowkeyLink>
    </HeaderDiv>
  );
};

export { AppHeader };
