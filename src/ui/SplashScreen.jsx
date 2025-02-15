import styled from "styled-components";
import Muzira from "../assets/muzir_head.png";
const StyledSplash = styled.div`
  display: flex;
  min-height: 100dvh;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledImg = styled.img`
  animation: zoom-in-zoom-out 3s ease-in-out infinite;
  /* width: 226px;
  height: 58px; */

  @keyframes zoom-in-zoom-out {
    0% {
      scale: 100%;
    }
    50% {
      scale: 150%;
    }
    100% {
      scale: 100%;
    }
  }
`;
function SplashScreen() {
  return (
    <StyledSplash>
      <StyledImg src={Muzira} alt="Muzira" />
    </StyledSplash>
  );
}

export default SplashScreen;
