import styled from "styled-components";
import PlayBoard from "../../ui/PlayBoard";
import PlayProgress from "./PlayProgress";
import PlayingImage from "/src/assets/layout/Essence-1.png";
import { useAudio } from "../../context/AudioContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Image = styled.img`
  max-width: 890px;
  height: 100%;
  width: 100%;
  max-height: 600px;
`;

const TitileDiv = styled.div``;
function NowPlayingPage() {
  const { isPlaying, currentSongData } = useAudio();

  return (
    <Container>
      {!currentSongData ? (
        <div>
          <p>Not playing any song currently</p>
        </div>
      ) : (
        <div>
          <Image src={currentSongData.image} alt="PlayingImage" />
          <TitileDiv>
            <span>
              {currentSongData.title} - {currentSongData.artist}
            </span>
          </TitileDiv>
        </div>
      )}
    </Container>
  );
}

export default NowPlayingPage;
