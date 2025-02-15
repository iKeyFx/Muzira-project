import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  background-color: var(--color-white);
  border-radius: 50%;
  animation: ${bounce} 1s infinite;
  animation-delay: ${(props) => props.$delay}ms;
`;

const BounceLoader = () => {
  return (
    <LoaderContainer>
      <Dot $delay={0} />
      <Dot $delay={200} />
      <Dot $delay={400} />
    </LoaderContainer>
  );
};

export default BounceLoader;
