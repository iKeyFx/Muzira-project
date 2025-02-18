import styled from "styled-components";
import Cover from "/src/assets/layout/playlistCover.png";
import BrowseList from "../features/categories/BrowseList";
import PlayProgress from "../features/Library/PlayProgress";
import PlayBoard from "../ui/PlayBoard";
import { useState } from "react";
import BounceLoader from "../ui/BounceLoader";

const Container = styled.div`
  h4 {
    margin: 0 0 2px;
  }
`;
const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2rem;
  column-gap: 3rem;

  &.loading {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const StyledEmptyData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 200px;
`;
function BrowseCategories() {
  const genre = [
    "Pop",
    "African",
    "R & B",
    "Worldwide",
    "Rock",
    "Hits",
    "Dj Mixes",
    "Country",
    "Party",
    "Alternative",
    "Sleep",
    "Feeling blue",
  ];
  const [isPending, setIsPending] = useState(false);
  return (
    <Container>
      <h4>Browse Categories</h4>
      <ItemContainer
        className={isPending || !genre || genre.length === 0 ? "loading" : ""}
      >
        {isPending ? (
          <StyledEmptyData>
            <BounceLoader />
          </StyledEmptyData>
        ) : !genre || genre.length === 0 ? (
          <StyledEmptyData>
            <p>No Genre available</p>
          </StyledEmptyData>
        ) : (
          genre.map((list, index) => <BrowseList key={index} title={list} />)
        )}
      </ItemContainer>
      <PlayProgress />
      <PlayBoard />
    </Container>
  );
}

export default BrowseCategories;
