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
  PDFButton,
} from "../components/SharedComponents";
import Modal from "react-modal";
import { StyledReactModal } from "../components/SharedComponents";
import aileen from "../audio/aileen.mp3";
import ang from "../audio/me-aileen.mp3";
import aileenZine from "../zines/aileen-zine.pdf";
import angZine from "../zines/angelina-aileen-zine.pdf";
import img1 from "../image/aileen/3.1.jpg";
import img2 from "../image/aileen/3.2.jpg";

const Aileen = () => {
  Modal.setAppElement("#root");
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  //Refs to help scroll to the transcript
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
        <TitleH1>03. Aileen</TitleH1>
      </Row>
      <StyledReactModal
        isOpen={showModal1}
        onRequestClose={() => setShowModal1(false)}
        shouldCloseOnOverlayClick={true}
      >
        <PDFButton onClick={() => setShowModal1(false)}>CLOSE X</PDFButton>
        <SinglePage pdf={aileenZine} />
      </StyledReactModal>
      <StyledReactModal
        isOpen={showModal2}
        onRequestClose={() => setShowModal2(false)}
        shouldCloseOnOverlayClick={true}
      >
        <PDFButton onClick={() => setShowModal2(false)}>CLOSE X</PDFButton>
        <SinglePage pdf={angZine} />
      </StyledReactModal>
      <Row>
        <ColGroup>
          <Audio controls>
            <source src={aileen} type="audio/mpeg"></source>
          </Audio>
          <TranscriptLink onClick={scrollToTranscript1}>
            jump to transcript
          </TranscriptLink>
          <PersonImage src={img2} onClick={() => setShowModal1(true)} />
          <Transcript ref={ref1}>
            <b>AILEEN:</b> I would see myself wearing a nice chunky sweater, I
            just don’t have a lot of those, because I think I still dress for
            California a lot of the time…ah! That’s a good way to put it! I
            think I have lot of California clothes still, and I just put like a
            jacket on over it, so I don’t own a lot of sweaters, or a lot of big
            sweaters. Like a lot of the sweaters I own are California sweaters,
            I guess?
            <br />
            <br />
            <b>ANGELINA:</b> [overlapping] It would make sense.
            <br />
            <br />
            <b>AILEEN:</b> And all my jeans are cropped! Manifest warm weather
            with my outfits.
            <br />
            <br />
            <b>ANGELINA:</b> [overlapping] [laughs]
          </Transcript>
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

export { Aileen };
