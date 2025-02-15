import styled from "styled-components";
import Cover from "/src/assets/layout/playlistCover.png";
import BrowseList from "../features/categories/BrowseList";
import PlayProgress from "../features/Library/PlayProgress";
import PlayBoard from "../ui/PlayBoard";

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
`;

function BrowseCategories() {
  const List = [
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
  return (
    <Container>
      <h4>Browse Categories</h4>
      <ItemContainer>
        {List.map((list, index) => (
          <BrowseList key={index} title={list} />
        ))}
      </ItemContainer>
      <PlayProgress />
      <PlayBoard />
    </Container>
  );
}

export default BrowseCategories;
