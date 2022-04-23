import styled from "styled-components";
import holly from "../audio/holly.m4a";

const Ava = () => {
  return (
    <div>
      <h1>05. Ava</h1>
      <audio controls>
        <source src={holly} type="audio/m4a"></source>
      </audio>
    </div>
  );
};

export { Ava };