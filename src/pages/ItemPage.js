import styled from "styled-components";
import { AppHeader } from "../components/AppHeader";
import { Sidebar } from "../components/Sidebar";
import { Reilly, Holly, Aileen, Kyle, Ava, Angelina } from "./index";
import { AppContainer } from "../components/SharedComponents";

const ItemPageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 30px 0;
`;

const ItemPage = ({ name }) => {
  return (
    <AppContainer>
      <AppHeader />
      <ItemPageContainer>
        <Sidebar />
        {getPageByName(name)}
      </ItemPageContainer>
    </AppContainer>
  );
};

const getPageByName = (name) => {
  switch (name) {
    case "reilly":
      return <Reilly />;
    case "holly":
      return <Holly />;
    case "aileen":
      return <Aileen />;
    case "kyle":
      return <Kyle />;
    case "ava":
      return <Ava />;
    case "angelina":
      return <Angelina />;
    default:
      return <Reilly />; //todo fix this to error page
  }
};

export { ItemPage };
