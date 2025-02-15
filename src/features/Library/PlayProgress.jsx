import styled from "styled-components";

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
function PlayProgress() {
  const progress = 20;
  return (
    <Container>
      <span>0:00</span>
      <ProgressBarWrapper>
        <ProgressBarBackground>
          <ProgressBarFill style={{ width: `${progress}%` }} />
        </ProgressBarBackground>
      </ProgressBarWrapper>
      <span>4:00</span>
    </Container>
  );
}

export default PlayProgress;
