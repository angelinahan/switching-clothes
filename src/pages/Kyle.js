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
import kyle from "../audio/kyle.mp3";
import ang from "../audio/me-kyle.mp3";
import kyleZine from "../zines/kyle-zine.pdf";
import angZine from "../zines/angelina-kyle-zine.pdf";
import img1 from "../image/kyle/4.1.jpg";
import img2 from "../image/kyle/4.2.jpg";

const Kyle = () => {
  Modal.setAppElement("#root");
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
        <TitleH1>03. Kyle</TitleH1>
      </Row>
      <StyledReactModal
        isOpen={showModal1}
        onRequestClose={() => setShowModal1(false)}
        shouldCloseOnOverlayClick={true}
      >
        <PDFButton onClick={() => setShowModal1(false)}>CLOSE X</PDFButton>
        <SinglePage pdf={kyleZine} />
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
            <source src={kyle} type="audio/mpeg"></source>
          </Audio>
          <TranscriptLink onClick={scrollToTranscript1}>
            jump to transcript
          </TranscriptLink>
          <PersonImage src={img2} onClick={() => setShowModal1(true)} />
          <Transcript ref={ref1}>
            <b>ANGELINA</b> I’m curious how you felt in West Village H among the
            CS people, compared to the people in your film class.
            <br />
            <br />
            <b>KYLE:</b> Erm…I dunno, I felt very like self aware in both
            classes, but I guess just in different ways. Because in my film
            class, it’s like a small class, so, I dunno, I was just curious if
            anyone would notice that I was dressed differently just cuz there
            weren’t that many people in the room. Whereas in the lab of West
            Village H where maybe that’s where I would have felt more out of
            place, it’s also a less social atmosphere where I feel like you
            don’t really notice other people as much. And so…I feel like that
            counterbalanced some of the feeling of out-of-place-ness, because
            literally just no one talks to you, and you just kind of go and you
            sit down and you do work. And you don’t really interact with other
            people. So even though I guess I felt more different or out of place
            there, it came up less in my mind because I wasn’t really
            interacting with anyone there. I guess the other thing that came up
            in my film class was I feel like I make a conscious effort to like,
            wear a halfway decent outfit to that class usually, because I’m
            intimidated by the other people in the class and want to make an
            effort at seeming like I have my shit together in, you know, like a
            humanities-centric stylistic way. Um, so yeah, I guess just
            generally I’m more conscious of myself in that class, so I was
            curious, maybe, what other people thought of what I was wearing.
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
            <b>ANGELINA:</b> Like I know you love Billy Joel a lot
            <br />
            <br />
            <b>KYLE:</b> Mm-hmm.
            <br />
            <br />
            <b>ANGELINA:</b> So I feel like it makes sense for you to wear it,
            but yeah. Me wearing it was weird because I was like, I do not like
            baseball or Billy Joel enough to-
            <br />
            <br />
            <b>KYLE:</b> Angelina hates Billy Joel.
            <br />
            <br />
            <b>ANGELINA:</b> I don’t hate Billy Joel! I just think that… I don’t
            love Billy Joel to the point where I would wear his name on my shirt
            very big. And it also felt like something that …like I was telling
            you before…I feel like in my mind, Billy Joel feels like the music
            of a generation above us, and specifically like, I dunno white
            people music? <br />
            <br />
            <b>KYLE:</b> No I mean that’s very fair because it’s definitely an
            interest I got from my mom, who is a 57 year old white woman.
            <br />
            <br />
            <b>ANGELINA:</b> Yeah. Which is like - I appreciate Billy Joel, but
            I do not look like the kind of person who wear this, as a young
            Asian woman, so [laughs]
            <br />
            <br />
            <b>KYLE:</b> [overlapping] No, makes a lot of sense. <br />
            <br />
            <b>ANGELINA:</b> So that was a really weird disconnect for me
            [laughs]
            <br />
            <br />
            <b>KYLE:</b> It’s definitely like, old white boomers from New York
            and New Jersey.
            <br />
            <br />
            <b>ANGELINA:</b> [laughs] Um, but very cool, it was definitely very
            different from I usually wear, so I appreciated that. And your pants
            fit so well! <br />
            <br />
            <b>KYLE:</b> [laughs] I’m very glad about that.
            <br />
            <br />
            <b>ANGELINA:</b> [overlapping] I literally want to steal them.
            They’re so good.
            <br />
            <br />
          </Transcript>
        </ColGroup>
        <ColGroup></ColGroup>
      </Row>
    </PersonPageContainer>
  );
};

export { Kyle };
