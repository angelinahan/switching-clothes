import styled from "styled-components";
import holly from "../audio/holly.mp3";

const Reilly = () => {
  return (
    <div>
      <h1>01. Reilly</h1>
      <audio controls>
        <source src={holly} type="audio/m4a"></source>
      </audio>
    </div>
  );
};

export { Reilly };
