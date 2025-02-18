import styled from "styled-components";
import { useAudio } from "../../context/AudioContext";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 10px;

  span {
    font-size: 14px;
  }
`;
const ProgressBarWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const ProgressBarBackground = styled.div`
  height: 5px;
  background-color: var(--color-white);
  border-radius: 5px;
  overflow: hidden;
  flex: 1;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  background-color: var(--color-primary);
  border-radius: 5px;
  transition: width 0.3s ease;
`;

function formatTime(seconds) {
  if (isNaN(seconds) || seconds === Infinity) return "0:00";

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function PlayProgress() {
  const { currentTime, duration, handleSeek } = useAudio();

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleProgressClick = (e) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickPosition = (e.clientX - rect.left) / rect.width;
    const newTime = clickPosition * duration;
    handleSeek(newTime);
  };
  return (
    <Container>
      <span>{formatTime(currentTime)}</span>
      <ProgressBarWrapper onClick={handleProgressClick}>
        <ProgressBarBackground>
          <ProgressBarFill style={{ width: `${progressPercentage}%` }} />
        </ProgressBarBackground>
      </ProgressBarWrapper>
      <span>{formatTime(duration)}</span>
    </Container>
  );
}

export default PlayProgress;
