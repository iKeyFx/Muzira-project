import React, { useState } from "react";
import Volume from "../assets/layout/volume.png";
import Play from "../assets/layout/play.png";
import FastForward from "../assets/layout/fast-forward.png";
import Rewind from "../assets/layout/rewind.png";
import Shuffle from "../assets/layout/shuffle.png";
import styled from "styled-components";
import { useAudio } from "../context/AudioContext";
import { IoMdPause } from "react-icons/io";

const StyledPlayBoard = styled.div`
  display: flex;
  background-color: var(--color-primary);
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-top: 10px;
`;

const ControlsContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0.6rem;

  img {
    cursor: pointer;
    width: 24px;
    height: 24px;
  }
`;

const PauseIcon = styled(IoMdPause)`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

const VolumeControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;

  img {
    cursor: pointer;
    width: 24px;
    height: 24px;
  }

  input {
    position: absolute;
    width: 80px;
    left: 100%;
  }
`;
function PlayBoard() {
  const {
    isPlaying,
    currentSongData,
    audioRef,
    playNextSong,
    playPreviousSong,
    toggleShuffle,
    volume,
    handleVolumeChange,
    isShuffleOn,
  } = useAudio();

  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.error("Error playing audio:", err);
      });
    }
  };

  const onVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    handleVolumeChange(newVolume);
  };

  const toggleVolumeSlider = () => {
    setShowVolumeSlider(!showVolumeSlider);
  };

  return (
    <StyledPlayBoard>
      <ControlsContainer>
        <img
          src={Shuffle}
          alt="Shuffle"
          onClick={toggleShuffle}
          active={isShuffleOn}
        />
        <img src={Rewind} alt="Previous" onClick={playPreviousSong} />
        {isPlaying ? (
          <PauseIcon onClick={togglePlay} />
        ) : (
          <img src={Play} alt="Play" onClick={togglePlay} />
        )}
        <img src={FastForward} alt="Next" onClick={playNextSong} />
        <VolumeControl>
          <img src={Volume} alt="Volume" onClick={toggleVolumeSlider} />
          {showVolumeSlider && (
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={onVolumeChange}
            />
          )}
        </VolumeControl>
      </ControlsContainer>
    </StyledPlayBoard>
  );
}

export default PlayBoard;
