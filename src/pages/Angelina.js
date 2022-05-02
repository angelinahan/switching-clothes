import styled from "styled-components";
import {
  TitleH1,
  PersonPageContainer,
  Row,
} from "../components/SharedComponents";
import greenCoat from "../image/angelina/greencoat.png";
import rockies from "../image/angelina/rockies.png";

const HalfWidthImg = styled.img`
  width: 50%;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 5% 0;
  }
`;
const HalfWidthP = styled.p`
  width: 45%;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 5% 0;
  }
`;

const EpilogueContainer = styled(PersonPageContainer)`
  margin: auto;
`;

const CenteredRow = styled(Row)`
  align-items: center;
`;

const Angelina = () => {
  return (
    <EpilogueContainer>
      <Row>
        <TitleH1>Epilogue: Angelina</TitleH1>
      </Row>
      <Row>
        For me, this project surfaced many subconscious feelings I had around
        clothing and the way it enhances or defies the way I am seen by others
        in the world. Each clothing switch was a vulnerable and intimate act -
        through it, I learned more about my friends and myself. My clothing
        style and relationship to clothing has evolved since the beginning of
        this project, after spending many days wearing other peoples' clothes.
        Below are two clothing purchases I made during this project that are
        very different from clothing I would have bought prior to starting this
        project.
      </Row>
      <CenteredRow>
        <HalfWidthImg src={greenCoat} />
        <HalfWidthP>
          Before this, I viewed coats as purely functional, rather than adding
          to the aesthetic of the outfit. I thrifted this green coat in Paris
          over spring break, and it is the first coat I've had that is both warm
          and fashionable. The style also feels more feminine than previous
          coats I've owned, which have all been boxy and sporty. Wearing this
          coat makes me feel beautiful and elegant, which I've never experienced
          from a coat before. I love the way dresses look under this, so I've
          also been wearing dresses more since I got this coat.
        </HalfWidthP>
      </CenteredRow>
      <CenteredRow>
        <HalfWidthP>
          I always wore skinny jeans before this, because I like wearing boots,
          and I thought the boots would look worse if the tops were covered by
          pants. Luckily, this thought was proven wrong. The day that I wore on
          Holly's straight leg jeans, I didn't want to take them off. The
          high-waisted, long-legged cut felt secure and comfortable and perfect
          for a tall person who has never found jeans that fit quite right. I
          had to give back Holly's pants eventually, but I bought myself a very
          similar pair and now I wear them all the time.
        </HalfWidthP>
        <HalfWidthImg src={rockies} />
      </CenteredRow>
      <Row>
        Ultimately, I see clothing as something that is much more playful and
        fluid than I used to. Clothing has power; clothing is magical. Clothing
        connotes so many societal expectations and pressures, but it can also
        make us feel so, so good. I'm here for the playfulness, joy, and
        empowerment that clothing can bring.
      </Row>
    </EpilogueContainer>
  );
};

export { Angelina };
