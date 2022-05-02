import { AppContainer, Row } from "../components/SharedComponents";
import { AppHeader } from "../components/AppHeader";
import styled from "styled-components";

const AboutDiv = styled.div`
  width: 50%;
  margin: 10% auto;
`;

const AboutPage = () => {
  return (
    <AppContainer>
      <AppHeader />
      <AboutDiv>
        <h2>A Day in Your Clothes</h2>
        <p>
          is a project exploring clothing, identity, and self-expression through
          a participatory process, documented through handmade zines and audio
          recordings. Over the course of three months, I invited five
          participants to switch clothing with me for one day. Each person chose
          an outfit from their closet that the other person wore for the day. At
          the end of the day, we reflected on how it felt to wear the other
          person’s clothes, and discussed realizations about our own clothing
          choices that emerged through this process.
        </p>
        <Row>
          <p>
            by Angelina Han //{" "}
            <a
              href="https://www.instagram.com/marigoldss/"
              target="_blank"
              rel="noreferrer"
            >
              @marigoldss
            </a>
            <br /> with thanks to Reilly, Holly, Aileen, Kyle, and Ava for their
            participation and friendship ♡
          </p>
          <p></p>
        </Row>
      </AboutDiv>
    </AppContainer>
  );
};

export { AboutPage };
