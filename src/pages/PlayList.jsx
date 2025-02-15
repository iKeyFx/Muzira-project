import styled from "styled-components";
import Cover from "/src/assets/layout/playlistCover.png";
import PlayListItem from "../features/playlist/PlayListItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

const Button = styled.button`
  background-color: var(--color-primary);
  color: var(--color-white);
  /* padding: 12px 48px; */
  border-radius: 2px;
  width: 30%;
  margin-top: 2rem;
`;
function PlayList() {
  const arr = Array.from({ length: 8 }, (_, i) => i + 1);
  return (
    <div>
      <h4>My Playlist</h4>
      <Container>
        <ItemContainer>
          {arr.map((index) => (
            <PlayListItem key={index} />
          ))}
        </ItemContainer>

        <Button>View More</Button>
      </Container>
    </div>
  );
}

export default PlayList;
