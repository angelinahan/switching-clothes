import styled from "styled-components";
import holly from "../audio/holly.mp3";

const Holly = () => {
  return (
    <div>
      <h1>02. Holly</h1>
      {console.log(holly)}
      <audio controls>
        <source src={holly} type="audio/mpeg"></source>
      </audio>
    </div>
  );
};

export { Holly };
