import styled from "styled-components";
import holly from "../audio/holly.mp3";
import hollyZine from "../zines/holly-zine.pdf";
import SinglePage from "../components/pdf/SinglePage";
import {
  TitleH1,
  PersonPageContainer,
  Row,
} from "../components/SharedComponents";
import { StyledReactModal } from "../components/SharedComponents";
import { useModal } from "react-modal-hook";

const Holly = () => {
  const [showHollyModal, hideHollyModal] = useModal(() => (
    <StyledReactModal isOpen>
      <SinglePage pdf={hollyZine} />
      <button onClick={hideHollyModal}>Hide modal</button>
    </StyledReactModal>
  ));

  return (
    <PersonPageContainer>
      <Row>
        <TitleH1>02. Holly</TitleH1>
      </Row>
      <Row>
        <audio controls>
          <source src={holly} type="audio/mpeg"></source>
        </audio>
        <button onClick={showHollyModal}>Show modal</button>;
      </Row>
      <Row>
        <SinglePage pdf={hollyZine} />
      </Row>
    </PersonPageContainer>
  );
};

export { Holly };
