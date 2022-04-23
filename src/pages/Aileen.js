import styled from "styled-components";
import holly from "../audio/holly.m4a";

const Aileen = () => {
  return (
    <div>
      <h1>03. Aileen</h1>
      <audio controls>
        <source src={holly} type="audio/m4a"></source>
      </audio>
    </div>
  );
};

export { Aileen };
