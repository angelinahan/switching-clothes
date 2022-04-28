import { useRef, useState } from "react";
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
import { StyledReactModal } from "../components/SharedComponents";
import holly from "../audio/holly.mp3";
import ang from "../audio/me-holly.mp3";
import hollyZine from "../zines/holly-zine.pdf";
import angZine from "../zines/angelina-holly-zine.pdf";
import img1 from "../image/holly/2.1.jpg";
import img2 from "../image/holly/2.2.jpg";

const Holly = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

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
      <StyledReactModal
        isOpen={showModal1}
        onRequestClose={() => setShowModal1(false)}
        shouldCloseOnOverlayClick={true}
      >
        <SinglePage pdf={hollyZine} />
        <button onClick={() => setShowModal1(false)}>Hide modal</button>
      </StyledReactModal>
      <StyledReactModal
        isOpen={showModal2}
        onRequestClose={() => setShowModal2(false)}
        shouldCloseOnOverlayClick={true}
      >
        <SinglePage pdf={angZine} />
        <button onClick={() => setShowModal2(false)}>Hide modal</button>
      </StyledReactModal>
      <Row>
        <ColGroup>
          <Audio controls>
            <source src={holly} type="audio/mpeg"></source>
          </Audio>
          <TranscriptLink onClick={scrollToTranscript1}>
            jump to transcript
          </TranscriptLink>
          <PersonImage src={img2} onClick={() => setShowModal1(true)} />
          <Transcript ref={ref1}></Transcript>
        </ColGroup>
        <ColGroup>
          <Audio controls>
            <source src={ang} type="audio/mpeg"></source>
          </Audio>
          <TranscriptLink onClick={scrollToTranscript2}>
            jump to transcript
          </TranscriptLink>
          <PersonImage src={img1} onClick={() => setShowModal2(true)} />
          <Transcript ref={ref2}></Transcript>
        </ColGroup>
        <ColGroup></ColGroup>
      </Row>
    </PersonPageContainer>
  );
};

export { Holly };
