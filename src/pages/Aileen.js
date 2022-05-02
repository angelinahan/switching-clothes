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
          <TranscriptLink onClick={() => clickTranscript1()}>
            {showTranscript1 ? "hide transcript" : "show transcript"}
          </TranscriptLink>
          <Transcript hidden={!showTranscript1}>
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
            <b>ANGELINA:</b> I’ve realized through switching clothes with Aileen
            that I have a really complicated relationship with wearing
            stereotypically feminine clothing such as the top that she gave me.
            On one hand, it makes me feel really delicate, fairylike, and
            beautiful, but on the other hand, when I go out in public wearing
            something like that, I find that I’m much more conscious of my body
            and the space I take up. I think that I have avoided clothing that
            is very hyper-feminine in my usual style because I’m afraid of how
            people will react. When I wear something that’s traditionally, like,
            hyper-feminine, like something with ruffles, dresses, anything like
            that, in public, people tend to see me as just “pretty” - and I want
            to be seen as so much more than that. I want to be seen for my
            personality, for my thoughts…even though, I, of course you can be
            all three at once, they’re not mutually exclusive, but I have found,
            when I dress in a “pretty” way, people tend to focus on that. And…I
            really don’t like that feeling, so I have tried to dress in a way
            that says “I’m interesting! I have thoughts, ask me about them!”.
            But, I do think that having this mindset has kept me from wearing a
            lot of clothing that I would’ve enjoyed wearing. I do like feeling
            pretty and delicate sometimes.
          </Transcript>
          <PersonImage src={img1} onClick={() => setShowModal2(true)} />
        </ColGroup>
        <ColGroup></ColGroup>
      </Row>
    </PersonPageContainer>
  );
};

export { Aileen };
