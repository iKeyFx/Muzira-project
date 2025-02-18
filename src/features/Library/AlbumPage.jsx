import styled from "styled-components";
import Fave from "/src/assets/layout/faveScatta.png";
import AlbumItem from "./AlbumItem";
import { useState } from "react";
import BounceLoader from "../../ui/BounceLoader";

const Container = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  border: 1px solid var(--color-primary);
  border-radius: 8px;

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

function AlbumPage() {
  const [isPending, setIsPending] = useState(false);
  const arr = Array.from({ length: 9 }, (_, i) => i + 1);
  // const arr = [];
  return (
    <Container
      className={isPending || !arr || arr.length === 0 ? "loading" : ""}
    >
      {isPending ? (
        <StyledEmptyData>
          <BounceLoader />
        </StyledEmptyData>
      ) : !arr || arr.length === 0 ? (
        <StyledEmptyData>
          <p>No Album available</p>
        </StyledEmptyData>
      ) : (
        arr.map((i) => <AlbumItem key={i} />)
      )}
    </Container>
  );
}

export default AlbumPage;
