import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import MuzirLogo from "../assets/muzir1.png";
import RemaImage from "../assets/Ellipse 17.png";
import LamarImage from "../assets/Ellipse 16.png";
import BurnaImage from "../assets/Ellipse 15.png";

const Container = styled.div`
  min-height: 100dvh;
  background-color: black;
  color: white;
  position: relative;
  overflow: hidden;
`;

const PurpleCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: rgba(123, 31, 162, 0.4);
  ${(props) => props.styles}
`;

const BackgroundDecorations = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`;

const Header = styled.header`
  position: relative;
  z-index: 10;
  padding: 1.5rem 2rem;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
`;

const Logo = styled.div`
  cursor: pointer;
  img {
    height: 2.5rem;
  }
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    cursor: pointer;
    &:hover {
      color: #d1d1d1;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  ${(props) =>
    props.primary
      ? `
    background-color: #7B1FA2;
    color: white;
    &:hover {
      background-color: #6A1B9A;
    }
  `
      : `
    background-color: white;
    color: #7B1FA2;
    &:hover {
      background-color: #f5f5f5;
    }
  `}
`;

const MainContent = styled.main`
  position: relative;
  z-index: 10;
  padding: 3rem 2rem;
`;

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const TextContent = styled.div`
  max-width: 600px;

  h1 {
    font-size: 3.75rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  p {
    font-size: 1.25rem;
    color: #d1d1d1;
    margin-bottom: 2rem;
  }
`;

const ArtistImages = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  display: none;

  @media (min-width: 800px) {
    display: block;
  }
`;

const ArtistImage = styled.img`
  position: absolute;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  object-fit: cover;
  ${(props) => props.styles}
`;

function LandingPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <BackgroundDecorations>
        <PurpleCircle styles="top: 5rem; right: 8rem; width: 16rem; height: 16rem;" />
        <PurpleCircle styles="bottom: 5rem; left: 8rem; width: 12rem; height: 12rem;" />
        <PurpleCircle styles="top: 50%; left: 25%; width: 24rem; height: 24rem;" />
        <PurpleCircle styles="bottom: 0; right: 0; width: 18rem; height: 18rem;" />
      </BackgroundDecorations>

      <Header>
        <Nav>
          <Logo onClick={() => navigate("/")}>
            <img src={MuzirLogo} alt="Muzir" />
          </Logo>

          <NavContent>
            <NavList>
              <li>Home</li>
              <li>About us</li>
            </NavList>

            <ButtonGroup>
              <Button primary onClick={() => navigate("/login")}>
                Log In
              </Button>
              <Button onClick={() => navigate("/sign-up")}>Sign Up</Button>
            </ButtonGroup>
          </NavContent>
        </Nav>
      </Header>

      <MainContent>
        <ContentWrapper>
          <TextContent>
            <h1>Discover your moods</h1>
            <p>
              Explore your music activities and generate new and exciting
              playlists without having to open your Muzira app at all
            </p>
            <Button primary onClick={() => navigate("/sign-up")}>
              Continue with Muzira
            </Button>
          </TextContent>
        </ContentWrapper>

        <ArtistImages>
          <ArtistImage
            src={BurnaImage}
            alt="Artist"
            styles="top: 6rem; right: 16rem;"
          />
          <ArtistImage
            src={LamarImage}
            alt="Artist"
            styles="top: 1%; right: 5rem;"
          />
          <ArtistImage
            src={RemaImage}
            alt="Artist"
            styles="bottom: -3rem; right: 17rem;"
          />
        </ArtistImages>
      </MainContent>
    </Container>
  );
}

export default LandingPage;
