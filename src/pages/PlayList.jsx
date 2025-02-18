import styled from "styled-components";
import Cover from "/src/assets/layout/playlistCover.png";
import PlayListItem from "../features/playlist/PlayListItem";
import { useState } from "react";
import BounceLoader from "../ui/BounceLoader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  &.loading {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Button = styled.button`
  background-color: var(--color-primary);
  color: var(--color-white);
  /* padding: 12px 48px; */
  border-radius: 2px;
  width: 30%;
  margin-top: 2rem;
`;
const StyledEmptyData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 200px;
`;
function PlayList() {
  const [isPending, setIsPending] = useState(false);
  const arr = Array.from({ length: 8 }, (_, i) => i + 1);
  // const arr = [];
  return (
    <div>
      <h4>My Playlist</h4>
      <Container>
        <ItemContainer
          className={isPending || !arr || arr.length === 0 ? "loading" : ""}
        >
          {isPending ? (
            <StyledEmptyData>
              <BounceLoader />
            </StyledEmptyData>
          ) : !arr || arr.length === 0 ? (
            <StyledEmptyData>
              <p>You don't have any playlist</p>
            </StyledEmptyData>
          ) : (
            arr.map((index) => <PlayListItem key={index} />)
          )}
        </ItemContainer>

        <Button>View More</Button>
      </Container>
    </div>
  );
}

export default PlayList;
