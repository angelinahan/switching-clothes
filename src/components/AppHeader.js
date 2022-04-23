import styled from "styled-components";

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Space Mono";
  width: 100%;
  border-bottom: 2px solid olive;
`;

const AppHeader = () => {
  return (
    <HeaderDiv>
      <h1>A Day in Your Clothes</h1>
      <p>~ brief explaination of the project here ~</p>
    </HeaderDiv>
  );
};

export { AppHeader };
