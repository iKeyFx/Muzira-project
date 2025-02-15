import styled from "styled-components";
import Fave from "/src/assets/layout/faveScatta.png";
import AlbumItem from "./AlbumItem";

const Container = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  border: 1px solid var(--color-primary);
  border-radius: 8px;
`;

function AlbumPage() {
  const arr = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <Container>
      {arr.map((i) => (
        <AlbumItem key={i} />
      ))}
    </Container>
  );
}

export default AlbumPage;
