import styled from "styled-components";
import ListItem from "./ListItem";

const TopPickDiv = styled.div`
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  padding: 10px;
  /* display: flex; */
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 900px) {
    /* grid-template-columns: repeat(2, 1fr); */
  }
`;
const TopPickhead = styled.p`
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0px;
`;
function MusicComponent({ heading, data }) {
  if (!data || data.length === 0) return null;
  return (
    <>
      <TopPickhead>{heading}</TopPickhead>
      <TopPickDiv>
        {data?.map((index) => (
          <ListItem key={index} />
        ))}
      </TopPickDiv>
    </>
  );
}

export default MusicComponent;
