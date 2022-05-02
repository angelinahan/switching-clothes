import { useState } from "react";
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
import reilly from "../audio/reilly.mp3";
import ang from "../audio/me-reilly.mp3";
import reillyZine from "../zines/reilly-zine.pdf";
import angZine from "../zines/angelina-reilly-zine.pdf";
import img1 from "../image/reilly/1.1.jpg";
import img2 from "../image/reilly/1.2.jpg";

const Reilly = () => {
  Modal.setAppElement("#root");
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showTranscript1, setShowTranscript1] = useState(false);
  const [showTranscript2, setShowTranscript2] = useState(false);

  const clickTranscript1 = () => {
    const oldValue = showTranscript1;
    setShowTranscript1(!oldValue);
  };

  const clickTranscript2 = () => {
    const oldValue = showTranscript2;
    setShowTranscript2(!oldValue);
  };

  return (
    <PersonPageContainer>
      <Row>
        <TitleH1>01. Reilly</TitleH1>
      </Row>
      <StyledReactModal
        isOpen={showModal1}
        onRequestClose={() => setShowModal1(false)}
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
        <PDFButton onClick={() => setShowModal2(false)}>CLOSE X</PDFButton>
        <SinglePage pdf={angZine} />
      </StyledReactModal>
      <Row>
        <ColGroup>
          <Audio controls>
            <source src={reilly} type="audio/mpeg"></source>
          </Audio>
          <TranscriptLink onClick={() => clickTranscript1()}>
            {showTranscript1 ? "hide transcript" : "show transcript"}
          </TranscriptLink>
          <Transcript hidden={!showTranscript1}>
            <b>REILLY:</b> When you first brought up the topic of
            clothes-switching, it made me immediately think, “Oh, what is my
            sense of style?”. I don’t think I have a strong sense. I wore a
            uniform K-12, and you’d probably think “Oh, then you were probably
            breaking free, go out and get all these clothes.” And I was just
            like “Eh.” Kind of missing uniforms. In the mornings. It was easy.
            So I typically just…I had a lot of weird phases, like “Oh this looks
            like fun to wear”. So sometimes I’ll have three pairs of jeans in
            the exact same style, but they’re slightly different. You wouldn’t
            know, but they’re different. Now I’d say I’m mostly..uh, anything
            with fun textures. I like textures over patterns. And as long as
            it’s comfy at the end, extra bonus points. So that’s mainly it. I’m
            super happy the trends have gone more from skinny jeans into loose
            fitting whatever, because now I’m wearing jeans a lot more again.
          </Transcript>
          <PersonImage src={img2} onClick={() => setShowModal1(true)} />
        </ColGroup>
        <ColGroup>
          <Audio controls>
            <source src={ang} type="audio/mpeg"></source>
          </Audio>
          <TranscriptLink onClick={() => clickTranscript2()}>
            {showTranscript2 ? "hide transcript" : "show transcript"}
          </TranscriptLink>
          <Transcript hidden={!showTranscript2}>
            <b>ANGELINA:</b> Sometimes with clothes I purposefully pick
            something that looks, you know, “artsy” or “creative” when I go meet
            people who I know are- <br />
            <br />
            <b>REILLY:</b> Mm… <br />
            <br />
            <b>ANGELINA:</b> -creative as well… <br />
            <br />
            <b>REILLY:</b> That’s actually a good point
            <br />
            <br />
            <b>ANGELINA:</b> So I wanna blend in with them, and show that I’m
            cool too. [laughs] <br />
            <br />
            <b>REILLY:</b> Yeah. [laughs]
          </Transcript>
          <PersonImage src={img1} onClick={() => setShowModal2(true)} />
        </ColGroup>
        <ColGroup></ColGroup>
      </Row>
    </PersonPageContainer>
  );
};

export { Reilly };
