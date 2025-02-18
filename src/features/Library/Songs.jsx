import { useState } from "react";
import styled from "styled-components";
import LibrarySongList from "./LibrarySongList";
import useTrack from "../music/useTrack";
import { useAudio } from "../../context/AudioContext";
import BounceLoader from "../../ui/BounceLoader";
import { useEffect } from "react";

const StyledMain = styled.div`
  border: 1px solid var(--color-primary);
  min-height: 400px;
  padding: 5px 40px;
  border-radius: 4px;

  &.loading {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

// const AudioPlayerContainer = styled.div`
//   margin-top: 20px;
//   background-color: var(--color-primary);
//   padding: 10px;
//   border-radius: 4px;
// `;

const StyledEmptyData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 390px;
`;
function Songs() {
  const { data, isPending, isError, error } = useTrack();
  const { playSong, currentSongId, isPlaying, isLoading, updateSongList } =
    useAudio();

  useEffect(() => {
    if (data?.data && Array.isArray(data.data)) {
      updateSongList(data.data);
    }
  }, [data, updateSongList]);

  const handleSongSelect = (songId, streamUrl, songData) => {
    playSong(songId, streamUrl, songData);
  };
  // const data = [];
  if (isError) return null;
  return (
    <>
      <StyledMain className={isPending ? "loading" : ""}>
        {isPending ? (
          <BounceLoader />
        ) : !data?.data || data.data.length === 0 ? (
          <StyledEmptyData>
            <p>No songs available</p>
          </StyledEmptyData>
        ) : (
          data?.data?.map((song, index) => (
            <LibrarySongList
              key={song._id || index}
              song={song}
              isPlaying={song._id === currentSongId}
              onSongSelect={() =>
                handleSongSelect(song._id, song.stream_url, song)
              }
              isLoading={isLoading && song._id === currentSongId}
            />
          ))
        )}
      </StyledMain>
    </>
  );
}

export default Songs;
