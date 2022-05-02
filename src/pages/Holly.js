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
import holly from "../audio/holly.mp3";
import ang from "../audio/me-holly.mp3";
import hollyZine from "../zines/holly-zine.pdf";
import angZine from "../zines/angelina-holly-zine.pdf";
import img1 from "../image/holly/2.1.jpg";
import img2 from "../image/holly/2.2.jpg";

const Holly = () => {
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
        <TitleH1>02. Holly</TitleH1>
      </Row>
      <StyledReactModal
        isOpen={showModal1}
        onRequestClose={() => setShowModal1(false)}
        shouldCloseOnOverlayClick={true}
      >
        <PDFButton onClick={() => setShowModal1(false)}>CLOSE X</PDFButton>
        <SinglePage pdf={hollyZine} />
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
            <source src={holly} type="audio/mpeg"></source>
          </Audio>
          <TranscriptLink onClick={() => clickTranscript1()}>
            {showTranscript1 ? "hide transcript" : "show transcript"}
          </TranscriptLink>
          <Transcript hidden={!showTranscript1}>
            <b>HOLLY:</b> There’s kind of three influences…the one that isn’t
            listed here is being a designer and wanting to express that. <br />
            <br />
            <b>ANGELINA:</b> Mmm. <br />
            <br />
            <b>HOLLY:</b> But body image informs the silhouette and shape of
            clothing that I wear. My gender identity informs the gender
            presentation of my clothes. On days where I’m feeling more feminine
            I wear more feminine clothes. On days when I’m feeling less
            feminine, then I just want to wear mens’ clothes and feel like I’m
            just wearing clothes.
            <br />
            <br />
            <b>ANGELINA:</b> Right.
            <br />
            <br />
            <b>HOLLY:</b> Part of that I talked about in another question, which
            was wearing a lot of feminine clothing usually makes me feel subject
            to all of the judgements and expectations for how I should look.
            <br />
            <br />
            <b>ANGELINA:</b> Mmm… <br />
            <br />
            <b>HOLLY:</b> And starting to wear more masculine clothing and
            shapes was huge in letting me feel free from that.
            <br />
            <br />
            <b>ANGELINA:</b> Like expectations from other people?
            <br />
            <br />
            <b>HOLLY:</b> Yeah, yeah. I guess, when I dress really feminine then
            I feel like people can apply their judgements, like “You don’t look
            enough X, you don’t look enough Y, you’re not pretty enough, you
            don’t have the right body.” And I know that a lot of that is
            internalized. But wearing more masculine clothing just lets me be
            like “I’m a person in the world and I’m having a great time!”
            <br />
            <br />
            <b>ANGELINA:</b> Mm-hm. Yeah.
            <br />
            <br />
            <b>HOLLY:</b> It’s very freeing for me.
            <br />
            <br />
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
            <b>ANGELINA:</b> I was out for most of the day, so I was - that
            meant I was wearing the coat, so people weren’t really seeing this
            [gestures to the shirt], they were more seeing the coat. And I felt
            like that was really part of the outfit and part of your whole
            considered aesthetic, which was really cool and I really enjoyed,
            because I feel like I consider my - like I usually put together my
            outfits and then the coat is like just something to keep me warm and
            it’s not part of the outfit… <br />
            <br />
            <b>HOLLY:</b> Mmm…
            <br />
            <br />
            <b>ANGELINA:</b> Like I wouldn’t consider that [my usual coat]
            particularly cute, it’s just like utilitarian, and then my other big
            coat is also just for warmth. And so the real reveal is always just
            when I take off my coat…
            <br />
            <br />
            <b>HOLLY:</b> Interesting.
            <br />
            <br />
            <b>ANGELINA:</b> So it was really fun to wear a coat that was meant
            to be part of the whole outfit.
            <br />
            <br />
          </Transcript>
          <PersonImage src={img1} onClick={() => setShowModal2(true)} />
        </ColGroup>
        <ColGroup></ColGroup>
      </Row>
    </PersonPageContainer>
  );
};

export { Holly };
