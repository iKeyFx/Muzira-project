import styled from "styled-components";
import ArtistFlyers from "/src/assets/layout/Frame.png";
import { FaPlay } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  /* gap: 1rem; */
  margin: 0.8rem 0;
`;

const MusicTitle = styled.div`
  font-weight: 300;
`;
const MusicDuration = styled.div`
  font-weight: 300;
`;
const MusicDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    display: grid;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  img {
    width: 40px;
    height: 40px;
  }
`;

const MusicTitleSmall = styled.span`
  font-weight: 500;
`;
const MusicArtistsmall = styled.span`
  font-weight: 300;
  font-size: 14px;
`;

const PlayIconDiv = styled.div`
  color: var(--color-primary);
  position: absolute;
  left: -3%;
`;

function LibarySongList({ isPlaying }) {
  return (
    <Container>
      <PlayIconDiv>{isPlaying ? <FaPlay /> : ""}</PlayIconDiv>
      <MusicDetails>
        <ImageContainer>
          <img src={ArtistFlyers} alt="Artist Flyers" />
        </ImageContainer>
        <div>
          <MusicTitleSmall>Essence</MusicTitleSmall>
          <MusicArtistsmall>Wizkid, Ft. Tems</MusicArtistsmall>
        </div>
      </MusicDetails>
      <MusicTitle>Wizkid Ft Tems</MusicTitle>
      <MusicDuration>4:00</MusicDuration>
    </Container>
  );
}

export default LibarySongList;
