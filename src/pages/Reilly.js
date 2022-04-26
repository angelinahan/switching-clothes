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
import reilly from "../audio/reilly.mp3";
import ang from "../audio/me-reilly.mp3";
import reillyZine from "../zines/reilly-zine.pdf";
import angZine from "../zines/angelina-reilly-zine.pdf";
import img1 from "../image/reilly/1.1.jpg";
import img2 from "../image/reilly/1.2.jpg";

const Reilly = () => {
  const [showRModal, hideRModal] = useModal(() => (
    <StyledReactModal isOpen>
      <SinglePage pdf={reillyZine} />
      <button onClick={hideRModal}>Hide modal</button>
    </StyledReactModal>
  ));

  const [showAModal, hideAModal] = useModal(() => (
    <StyledReactModal isOpen>
      <SinglePage pdf={angZine} />
      <button onClick={hideAModal}>Hide modal</button>
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
        <TitleH1>01. Reilly</TitleH1>
      </Row>
      <Row>
        <ColGroup>
          <Audio controls>
            <source src={reilly} type="audio/mpeg"></source>
          </Audio>
          <TranscriptLink onClick={scrollToTranscript1}>
            jump to transcript
          </TranscriptLink>
          <PersonImage src={img2} onClick={showRModal} />
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
          <PersonImage src={img1} onClick={showAModal} />
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
