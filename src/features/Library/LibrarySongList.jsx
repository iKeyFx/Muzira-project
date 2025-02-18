import styled from "styled-components";
import ArtistFlyers from "/src/assets/layout/Frame.png";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import BounceLoader from "../../ui/BounceLoader";

const Container = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  position: relative;
  cursor: pointer;
  /* gap: 1rem; */
  margin: 0.8rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 2rem;
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
  left: -3.5%;
  top: ${(props) => (props.isLoading ? "50%" : "20%")};
`;

function LibarySongList({ isPlaying, song, onSongSelect, isLoading }) {
  return (
    <Container onClick={onSongSelect}>
      <PlayIconDiv isLoading={isLoading}>
        {isLoading ? <BounceLoader width="4px" /> : isPlaying ? <FaPlay /> : ""}
      </PlayIconDiv>
      <MusicDetails>
        <ImageContainer>
          <img src={song.image} alt={`${song.title} cover`} />
        </ImageContainer>
        <div>
          <MusicTitleSmall>{song.title}</MusicTitleSmall>
          <MusicArtistsmall>{song.artist}</MusicArtistsmall>
        </div>
      </MusicDetails>
      <MusicTitle>{song.artist}</MusicTitle>
      <MusicDuration>{song.duration}</MusicDuration>
    </Container>
  );
}

export default LibarySongList;
