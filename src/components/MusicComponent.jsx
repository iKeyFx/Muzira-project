import styled from "styled-components";
import ListItem from "./ListItem";
import { useState } from "react";
import BounceLoader from "../ui/BounceLoader";

const TopPickDiv = styled.div`
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  padding: 10px;
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  &.loading {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 900px) {
    /* grid-template-columns: repeat(2, 1fr); */
  }
`;
const TopPickhead = styled.p`
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0px;
`;

const StyledEmptyData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 200px;
`;
function MusicComponent({ heading, data }) {
  const [isPending, setIsPending] = useState(false);
  return (
    <>
      <TopPickhead>{heading}</TopPickhead>
      <TopPickDiv
        className={isPending || !data || data.length === 0 ? "loading" : ""}
      >
        {isPending ? (
          <StyledEmptyData>
            <BounceLoader />
          </StyledEmptyData>
        ) : !data || data.length === 0 ? (
          <StyledEmptyData>
            <p>No songs available</p>
          </StyledEmptyData>
        ) : (
          data?.map((index) => <ListItem key={index} />)
        )}
      </TopPickDiv>
    </>
  );
}

export default MusicComponent;
