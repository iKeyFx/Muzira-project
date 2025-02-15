import Volume from "../assets/layout/volume.png";
import Play from "../assets/layout/play.png";
import FastForward from "../assets/layout/fast-forward.png";
import Rewind from "../assets/layout/rewind.png";
import Shuffle from "../assets/layout/shuffle.png";
import styled from "styled-components";

const StyledPlayBoard = styled.div`
  display: flex;
  background-color: var(--color-primary);
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-top: 10px;

  div {
    display: flex;
    gap: 2rem;
    padding: 0.6rem;

    img {
      cursor: pointer;
    }
  }
`;
function PlayBoard() {
  return (
    <StyledPlayBoard>
      <div>
        <img src={Shuffle} alt="Shuffle" />
        <img src={Rewind} alt="Rewind" />
        <img src={Play} alt="Play" />
        <img src={FastForward} alt="FastForward" />
        <img src={Volume} alt="Volume" />
      </div>
    </StyledPlayBoard>
  );
}

export default PlayBoard;
