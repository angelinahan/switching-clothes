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
import Modal from "react-modal";
import { StyledReactModal } from "../components/SharedComponents";
import reilly from "../audio/reilly.mp3";
import ang from "../audio/me-reilly.mp3";
import reillyZine from "../zines/reilly-zine.pdf";
import angZine from "../zines/angelina-reilly-zine.pdf";
import img1 from "../image/reilly/1.1.jpg";
import img2 from "../image/reilly/1.2.jpg";
import { PDFButton } from "../components/pdf/SinglePage";

const Reilly = () => {
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
        <TitleH1>01. Reilly</TitleH1>
      </Row>
      <StyledReactModal
        isOpen={showModal1}
        onAfterOpen={() => (document.body.style.overflow = "hidden")}
        onRequestClose={() => {
          document.body.removeAttribute("style");
          setShowModal1(false);
        }}
        shouldCloseOnOverlayClick={true}
      >
        <PDFButton onClick={() => setShowModal1(false)}>CLOSE X</PDFButton>
        <SinglePage pdf={reillyZine} />
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
            <source src={reilly} type="audio/mpeg"></source>
          </Audio>
          <TranscriptLink onClick={scrollToTranscript1}>
            jump to transcript
          </TranscriptLink>
          <PersonImage src={img2} onClick={() => setShowModal1(true)} />
          <Transcript ref={ref1}>
            Reilly: When you first brought up the topic of clothes-switching, it
            made me immediately think, “Oh, what is my sense of style?”. I don’t
            think I have a strong sense. I wore a uniform K-12, and you’d
            probably think “Oh, then you were probably breaking free, go out and
            get all these clothes.” And I was just like “Eh.” Kind of missing
            uniforms. In the mornings. It was easy. So I typically just…I had a
            lot of weird phases, like “Oh this looks like fun to wear”. So
            sometimes I’ll have three pairs of jeans in the exact same style,
            but they’re slightly different. You wouldn’t know, but they’re
            different. Now I’d say I’m mostly..uh, anything with fun textures. I
            like textures over patterns. And as long as it’s comfy at the end,
            extra bonus points. So that’s mainly it. I’m super happy the trends
            have gone more from skinny jeans into loose fitting whatever,
            because now I’m wearing jeans a lot more again.
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
          <Transcript ref={ref2}>
            Angelina: Sometimes with clothes I purposefully pick something that
            looks, you know, “artsy” or “creative” when I go meet people who I
            know are- <br />
            Reilly: Mm… <br />
            Angelina: -creative as well… <br />
            Reilly: That’s actually a good point
            <br />
            Angelina: So I wanna blend in with them, and show that I’m cool too.
            [laughs] <br />
            Reilly: Yeah. [laughs]
          </Transcript>
        </ColGroup>
        <ColGroup></ColGroup>
      </Row>
    </PersonPageContainer>
  );
};

export { Reilly };
