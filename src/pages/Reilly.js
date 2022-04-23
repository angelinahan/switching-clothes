import styled from "styled-components";
import reilly from "../audio/reilly.mp3";

const Reilly = () => {
  return (
    <div>
      <h1>01. Reilly</h1>
      <audio controls>
        <source src={reilly} type="audio/mpeg"></source>
      </audio>
    </div>
  );
};

export { Reilly };
