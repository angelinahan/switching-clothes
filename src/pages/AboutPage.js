import { AppContainer } from "../components/SharedComponents";
import { AppHeader } from "../components/AppHeader";

const AboutPage = () => {
  return (
    <AppContainer>
      <AppHeader />
      <div>About</div>
      <p>
        A Day in Your Clothes is a project exploring clothing, identity, and
        self-expression through a participatory process, documented through
        handmade zines and audio recordings. Over the course of three months, I
        invited five participants to switch clothing with me for one day. Each
        person chose an outfit from their closet that the other person wore for
        the day. At the end of the day, we reflected on how it felt to wear the
        other person’s clothes, and discussed realizations about our own
        clothing choices that emerged through this process.
      </p>
    </AppContainer>
  );
};

export { AboutPage };
