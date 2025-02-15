import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import MobileLogo from "/src/assets/muzir_head.png";
import MusicAlbumIcon from "/src/assets/layout/akar-icons_music-album.png";
import UserIcon from "/src/assets/layout/bx_user-circle.png";
import PlaylistIcon from "/src/assets/layout/bxs_playlist.png";
import SettingsIcon from "/src/assets/layout/bytesize_settings.png";
import CarbonPlayIcon from "/src/assets/layout/carbon_playlist.png";
import HomeIcon from "/src/assets/layout/clarity_home-solid.png";
import FavouriteIcon from "/src/assets/layout/ic_baseline-favorite-border.png";
import PlaySearchIcon from "/src/assets/layout/icon-park-outline_find.png";
import NavItem from "./NavItem";

const StyledAside = styled.aside`
  grid-row: 1/ -1;
  background-color: var(--color-primary);
  padding: 1rem;
  transition: all 0.3s ease;
`;

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  /* gap: 2rem; */
`;

const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  /* margin-bottom: 1rem; */

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
`;

const NavGroup = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

function SideBar() {
  return (
    <StyledAside>
      <Container>
        <LogoDiv>
          <img src={MobileLogo} alt="logo" />
        </LogoDiv>

        <NavGroup>
          <NavItem to="/home" icon={HomeIcon} text="Home" />
          <NavItem to="/library" icon={MusicAlbumIcon} text="Library" />
          <NavItem to="/playlist" icon={PlaylistIcon} text="Playlist" />
          <NavItem
            to="/create-playlist"
            icon={CarbonPlayIcon}
            text="Create Playlist"
          />
        </NavGroup>

        <NavGroup>
          <NavItem
            to="/browse"
            icon={PlaySearchIcon}
            text="Browse Categories"
          />
          <NavItem to="/favorites" icon={FavouriteIcon} text="Favorite songs" />
          <NavItem to="/profile" icon={UserIcon} text="User Profile" />
        </NavGroup>

        <NavGroup>
          <NavItem to="/settings" icon={SettingsIcon} text="Setting" />
        </NavGroup>
      </Container>
    </StyledAside>
  );
}

export default SideBar;
