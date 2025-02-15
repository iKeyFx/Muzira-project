import { useState } from "react";
import styled from "styled-components";
import LibrarySongList from "./LibrarySongList";
import PlayProgress from "./PlayProgress";
import PlayBoard from "../../ui/PlayBoard";

const StyledMain = styled.div`
  border: 1px solid var(--color-primary);
  min-height: 400px;
  padding: 5px 40px;
  border-radius: 4px;
`;
function Songs() {
  const [isPlaying, setIsPlaying] = useState(false);
  const ArrayTest = Array.from({ length: 8 }, (_, i) => i + 1);
  return (
    <>
      <StyledMain>
        {ArrayTest.map((index) => (
          <LibrarySongList key={index} isPlaying={isPlaying} />
        ))}
      </StyledMain>

      {/* <PlayProgress />
      <PlayBoard /> */}
    </>
  );
}

export default Songs;
