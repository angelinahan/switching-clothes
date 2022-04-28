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
import ava from "../audio/ava.mp3";
import ang from "../audio/me-ava.mp3";
import avaZine from "../zines/ava-zine.pdf";
import angZine from "../zines/angelina-ava-zine.pdf";
import img1 from "../image/ava/5.1.jpg";
import img2 from "../image/ava/5.2.jpg";

const Ava = () => {
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
        <TitleH1>05. Ava</TitleH1>
      </Row>
      <StyledReactModal
        isOpen={showModal1}
        onRequestClose={() => setShowModal1(false)}
        shouldCloseOnOverlayClick={true}
      >
        <PDFButton onClick={() => setShowModal1(false)}>CLOSE X</PDFButton>
        <SinglePage pdf={avaZine} />
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
            <source src={ava} type="audio/mpeg"></source>
          </Audio>
          <TranscriptLink onClick={scrollToTranscript1}>
            jump to transcript
          </TranscriptLink>
          <PersonImage src={img2} onClick={() => setShowModal1(true)} />
          <Transcript ref={ref1}>
            <b>AVA:</b> When I looked in the mirror, I saw…I saw Angelina, but I
            also saw another version of myself, and it was - I looked upon
            myself with love, as I also look at Angelina with love. It was cool.
            It feels very intimate also, like, to mimic someone’s entire look,
            and on purpose? Because I think I was taught, as someone who was
            socialized as a woman, growing up, and especially, I think, growing
            up as the only Asian girl, really - there was one other Asian girl
            in my all-white school and class - I’m not unfamiliar with trying to
            mimic another girl’s um, appearance, but it’s always supposed to be
            like in secret, because I feel like I’ve always been put in
            competition and scarcity with other women. So like, for me to mimic
            someone and copy someone, it couldn’t be so on the nose - but it was
            always on the nose! In reality like, we were all just in elementary
            school copying each other, and that’s how social exchange happened
            and how we all would like follow trends and stuff. So anyways, I’m
            just noticing that to completely, explicitly try to copy someone,
            for it to be very conscious and even on purpose, is a different, is
            a change.
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
            <b>ANGELINA:</b> When I put on the bow in the morning, I felt
            absolutely amazing, just the most main character energy ever. And
            the bow, combined with the really bright, eye-catching dress,
            everything felt really right and I felt beautiful and confident. So
            dressing up in the morning was definitely really really fun and a
            highlight.
            <br />
            <br />
            In the afternoon, I went downtown, and I think that when the bubble
            began to burst a little bit, because I noticed that I was getting
            more unwanted attention from men than I usually get, and it was
            really uncomfortable. It was unfortunate too, because in the morning
            I was thinking to myself, “Wow, why don’t I dress like this more
            often, this feels so amazing!” I think subconsciously I do try to
            keep like a lower profile in a way, when I’m going out by myself,
            avoiding wearing certain clothing that I otherwise might want to
            wear, because I don’t want to draw attention to myself, or make
            myself look more delicate and vulnerable and a target to people who
            might have bad intentions. <br />
            <br />
            But wearing this outfit made me feel so happy and so euphoric that I
            want to keep wearing clothes that make me feel this way. I also
            think unfortunately that weird people are going to say weird things
            to female-presenting people no matter what, no matter what you’re
            wearing. So it’s this difficult balance to navigate when you want to
            wear things that make you feel really amazing but there’s also a
            fear. I don’t know how to really reconcile those two things, but I
            have discovered from this switch that I really love wearing dresses
            and these things that I don’t usually allow myself to wear very
            often, because of the fear. So that’s something to think about, and
            I think I’ll try to incorporate more clothing that makes me feel
            super happy like this in my normal outfits.
          </Transcript>
        </ColGroup>
        <ColGroup></ColGroup>
      </Row>
    </PersonPageContainer>
  );
};

export { Ava };
