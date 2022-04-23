import styled from "styled-components";
import holly from "../audio/holly.mp3";

const Final = () => {
  return (
    <div>
      <h1>Final thoughts</h1>
      <audio controls>
        <source src={holly} type="audio/m4a"></source>
      </audio>
    </div>
  );
};

export { Final };
