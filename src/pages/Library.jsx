import styled from "styled-components";
import LibrarySongList from "../features/Library/LibrarySongList";
import PlayProgress from "../features/Library/PlayProgress";
import PlayBoard from "../ui/PlayBoard";
import { NavLink, Outlet } from "react-router-dom";

const StyledLibrary = styled.div``;
const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
  padding: 0;
  margin: 0;
  margin-bottom: 5px;
  cursor: pointer;
`;

const StyledList = styled.li`
  a {
    color: var(--color-white);
    opacity: 0.6;

    &:hover,
    &:active,
    &.active {
      color: var(--color-white);
      opacity: 1;
    }
  }
`;

const StyledMain = styled.div`
  border: 1px solid var(--color-primary);
  min-height: 400px;
  padding: 5px 40px;
  border-radius: 4px;
`;

function Library() {
  return (
    <StyledLibrary>
      <StyledUl>
        <StyledList>
          <NavLink to="song">Songs</NavLink>
        </StyledList>
        <StyledList>
          <NavLink to="album">Album</NavLink>
        </StyledList>
        <StyledList>
          <NavLink to="now-playing">Now Playing</NavLink>
        </StyledList>
        <StyledList>
          <NavLink to="favourites">Favourite</NavLink>
        </StyledList>
      </StyledUl>
      <main>
        <Outlet />
      </main>
      <PlayProgress />
      <PlayBoard />
    </StyledLibrary>
  );
}

export default Library;
