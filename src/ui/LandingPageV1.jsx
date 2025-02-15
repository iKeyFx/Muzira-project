import styled from "styled-components";
import MuzirLogo from "../assets/muzir1.png";
import RemaImage from "../assets/Ellipse 17.png";
import LamarImage from "../assets/Ellipse 16.png";
import BurnaImage from "../assets/Ellipse 15.png";
import BgIcon1 from "../assets/Group 18.png";
import BgIcon3 from "../assets/Group 19.png";
import { useNavigate } from "react-router";

const Container = styled.div`
  background-color: var(--color-black);
  min-height: 100dvh;
  padding: 0rem 2rem 0rem 1rem;
  color: var(--color-white);
  position: relative;
  @media (min-width: 768px) {
    /* display: none; */
  }
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 1rem 3rem 1rem 1rem;
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* max-width: 1200px; */
`;

const HeaderDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`;

const ImageCon = styled.div`
  img {
    cursor: pointer;
    /* height: 50px; */
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;

  li {
    font-size: 1rem;
    cursor: pointer;
    &:hover {
      color: var(--color-grey);
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  button {
    padding: 0.5rem 2rem;
    border: none;
    background-color: var(--color-primary);
    color: var(--color-white);
    transition: background-color 0.3s ease;

    &:hover {
    }

    &:last-child {
      background-color: var(--color-white);
      color: var(--color-primary);

      &:hover {
        background-color: var(--color-grey);
      }
    }
  }

  @media (max-width: 768px) {
    &:last-child {
      display: none;
    }
  }
`;

const Body = styled.div`
  padding: 3rem 4rem;
  display: flex;
  gap: 5rem;

  @media (max-width: 900px) {
    padding: 1rem 4rem;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Div1 = styled.div`
  flex: 1;
  h2 {
    font-weight: 700;
    line-height: 1.1;
    font-size: 60px;
    margin-bottom: 0;
  }

  p {
    padding: 0rem 5rem 0 0;
  }

  button {
    transition: background-color 0.3s ease-out;
    background-color: var(--color-primary);
    border-radius: 0px;
    cursor: pointer;
    &:hover {
      border-color: var(--color-primary);
    }
  }
  @media (max-width: 900px) {
    /* display: grid; */
  }
  @media (max-width: 768px) {
    padding: 0;
  }
`;
const Div2 = styled.div`
  flex: 1;
  position: relative;

  @media (max-width: 1084px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
const ImageArtist = styled.img`
  width: 200px;
  height: 200px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const BGIcon1 = styled.img`
  position: fixed;
  z-index: 0;
  bottom: 2%;
  right: 0%;
  width: 350px;
`;
const BGIcon2 = styled(BGIcon1)`
  left: 0%;
  transform: rotate(90deg);
`;
const BGIconTop = styled(BGIcon1)`
  top: 0%;
  left: 30%;
  width: 300px;
`;
function Test() {
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <NavBar>
          <ImageCon onClick={() => navigate("/")}>
            <img src={MuzirLogo} alt="Logo" />
          </ImageCon>

          <HeaderDetails>
            <NavList>
              <li>Home</li>
              <li>About us</li>
            </NavList>

            <ButtonGroup>
              <button onClick={() => navigate("/login")}>Log In</button>
              <button onClick={() => navigate("/sign-up")}>Sign Up</button>
            </ButtonGroup>
          </HeaderDetails>
        </NavBar>
      </Header>
      <Body>
        <Div1>
          <div>
            <h2>Discover your moods</h2>
            <p>
              Explore your music activities and generate new and exciting
              playlists without having to open your Muzira app at all
            </p>
            <button>Continue with Muzira</button>
          </div>
        </Div1>
        <Div2>
          <ImageArtist src={BurnaImage} alt="Burna Boy" />
          <ImageArtist src={LamarImage} alt="Kendrick Lamar" />
          <ImageArtist src={RemaImage} alt="Rema" />
        </Div2>
      </Body>
      <BGIcon1 src={BgIcon1} alt="Bg icom" />
      <BGIcon2 src={BgIcon1} alt="Bg icom" />
      <BGIconTop src={BgIcon3} alt="Bg icom" />
    </Container>
  );
}

export default Test;
