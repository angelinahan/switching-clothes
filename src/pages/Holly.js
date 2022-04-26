import { useRef } from "react";
import SinglePage from "../components/pdf/SinglePage";
import {
  TitleH1,
  PersonPageContainer,
  Row,
  PersonImage,
  ColGroup,
  Audio,
  Transcript,
  TranscriptLink,
} from "../components/SharedComponents";
import { useModal } from "react-modal-hook";
import { StyledReactModal } from "../components/SharedComponents";
import holly from "../audio/holly.mp3";
import ang from "../audio/holly.mp3";
import hollyZine from "../zines/holly-zine.pdf";
import angZine from "../zines/angelina-holly-zine.pdf";
import img1 from "../image/holly/2.1.jpg";
import img2 from "../image/holly/2.2.jpg";

const Holly = () => {
  const [showModal1, hideModal1] = useModal(() => (
    <StyledReactModal isOpen>
      <SinglePage pdf={hollyZine} />
      <button onClick={hideModal1}>Close modal</button>
    </StyledReactModal>
  ));

  const [showModal2, hideModal2] = useModal(() => (
    <StyledReactModal isOpen>
      <SinglePage pdf={angZine} />
      <button onClick={hideModal2}>Close modal</button>
    </StyledReactModal>
  ));

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const scrollToTranscript1 = () => {
    if (ref1 && ref1.current) {
      ref1.current.scrollIntoView();
    }
  };
  const scrollToTranscript2 = () => {
    if (ref2 && ref2.current) {
      ref2.current.scrollIntoView();
    }
  };

  return (
    <PersonPageContainer>
      <Row>
        <TitleH1>02. Holly</TitleH1>
      </Row>
      <Row>
        <ColGroup>
          <Audio controls>
            <source src={holly} type="audio/mpeg"></source>
          </Audio>
          <TranscriptLink onClick={scrollToTranscript1}>
            jump to transcript
          </TranscriptLink>
          <PersonImage src={img2} onClick={showModal1} />
          <Transcript ref={ref1}></Transcript>
        </ColGroup>
        <ColGroup>
          <Audio controls>
            <source src={ang} type="audio/mpeg"></source>
          </Audio>
          <TranscriptLink onClick={scrollToTranscript2}>
            jump to transcript
          </TranscriptLink>
          <PersonImage src={img1} onClick={showModal2} />
          <Transcript ref={ref2}></Transcript>
        </ColGroup>
        <ColGroup></ColGroup>
      </Row>
    </PersonPageContainer>
  );
};

export { Holly };
