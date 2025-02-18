import { createContext, useState, useRef, useEffect } from "react";
import { useContext } from "react";
import { convertViaCloudinary } from "../services/apiCloudinary";

// Create context
export const AudioContext = createContext();

export function AudioProvider({ children }) {
  const [currentSongId, setCurrentSongId] = useState(null);
  const [currentSongUrl, setCurrentSongUrl] = useState("");
  const [currentSongData, setCurrentSongData] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isShuffleOn, setIsShuffleOn] = useState(false);
  const [songList, setSongList] = useState([]);

  const [urlCache, setUrlCache] = useState({});

  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);

      // Auto-play next song
      playNextSong();
    };

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleDurationChange = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };
    const handleVolumeChange = () => setVolume(audio.volume);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("durationchange", handleDurationChange);
    audio.addEventListener("volumechange", handleVolumeChange);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("durationchange", handleDurationChange);
      audio.removeEventListener("volumechange", handleVolumeChange);
    };
  }, []);

  // Update song list when new data is available
  const updateSongList = (songs) => {
    if (Array.isArray(songs) && songs.length > 0) {
      setSongList(songs);
    }
  };

  // Main function to play a song
  const playSong = async (songId, streamUrl, songData) => {
    if (!audioRef.current) return;

    if (currentSongId === songId) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => {
          console.error("Error playing audio:", err);
        });
      }
      return;
    }

    try {
      setIsLoading(true);
      setCurrentSongId(songId);
      setCurrentSongData(songData);

      const convertedUrl = await convertViaCloudinary(
        streamUrl,
        setIsAudioPlaying,
        urlCache,
        setUrlCache
      );

      if (!convertedUrl) {
        throw new Error("Could not convert URL");
      }

      setCurrentSongUrl(convertedUrl);

      setTimeout(() => {
        const audio = audioRef.current;
        if (audio) {
          audio.load();
          audio.play().catch((err) => {
            console.error("Error playing audio:", err);
            setCurrentSongId(null);
            setCurrentSongData(null);
          });
        }
      }, 100);
    } catch (error) {
      console.error("Error processing song:", error);
      setCurrentSongId(null);
      setCurrentSongData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSeek = (newTime) => {
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (newVolume) => {
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  // Helper to get a random song in shuffle mode
  const getRandomSong = () => {
    if (!songList.length) return null;

    // Filter out current song to avoid repeating
    const availableSongs = songList.filter(
      (song) => song._id !== currentSongId
    );

    if (!availableSongs.length) {
      // If no other songs available, use the whole list
      return songList[Math.floor(Math.random() * songList.length)];
    }

    return availableSongs[Math.floor(Math.random() * availableSongs.length)];
  };

  const playNextSong = () => {
    if (!songList.length) return;

    let nextSong;

    if (isShuffleOn) {
      // Get random song in shuffle mode
      nextSong = getRandomSong();
    } else {
      // Find current song index
      const currentIndex = songList.findIndex(
        (song) => song._id === currentSongId
      );

      if (currentIndex === -1 || currentIndex === songList.length - 1) {
        // If current song not found or is last song, play first song
        nextSong = songList[0];
      } else {
        // Play next song in list
        nextSong = songList[currentIndex + 1];
      }
    }

    if (nextSong) {
      playSong(nextSong._id, nextSong.stream_url, nextSong);
    }
  };

  // Function to play previous song
  const playPreviousSong = () => {
    if (!songList.length) return;

    // If we're at the start of the song (less than 3 seconds in), go to previous song
    // Otherwise restart the current song
    if (currentTime > 3) {
      handleSeek(0);
      return;
    }

    let previousSong;

    if (isShuffleOn) {
      // Get random song in shuffle mode
      previousSong = getRandomSong();
    } else {
      // Find current song index
      const currentIndex = songList.findIndex(
        (song) => song._id === currentSongId
      );

      if (currentIndex === -1 || currentIndex === 0) {
        // If current song not found or is first song, play last song
        previousSong = songList[songList.length - 1];
      } else {
        // Play previous song in list
        previousSong = songList[currentIndex - 1];
      }
    }

    if (previousSong) {
      playSong(previousSong._id, previousSong.stream_url, previousSong);
    }
  };

  const toggleShuffle = () => {
    setIsShuffleOn(!isShuffleOn);
  };

  // Create context value
  const contextValue = {
    currentSongId,
    currentSongUrl,
    currentSongData,
    isPlaying,
    duration,
    currentTime,
    isLoading,
    volume,
    isShuffleOn,
    audioRef,
    songList,

    // Methods
    playSong,
    handleSeek,
    handleVolumeChange,
    playNextSong,
    playPreviousSong,
    toggleShuffle,
    updateSongList,
  };

  return (
    <AudioContext.Provider value={contextValue}>
      {children}
      <audio ref={audioRef} src={currentSongUrl} />
    </AudioContext.Provider>
  );
}

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
