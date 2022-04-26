import styled from "styled-components";
import holly from "../audio/holly.mp3";
import hollyZine from "../zines/holly-zine.pdf";
import SinglePage from "../components/pdf/SinglePage";
import { TitleH1 } from "../components/SharedComponents";

const HollyContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-family: "Inter", sans-serif;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Holly = () => {
  return (
    <HollyContainer>
      <Row>
        <TitleH1>02. Holly</TitleH1>
      </Row>
      <Row>
        <audio controls>
          <source src={holly} type="audio/mpeg"></source>
        </audio>
      </Row>
      <Row>
        <SinglePage pdf={hollyZine} />
        <SinglePage pdf={hollyZine} />
        {/* <ZineFrame src={hollyZine}></ZineFrame> */}
      </Row>
    </HollyContainer>
  );
};

export { Holly };
