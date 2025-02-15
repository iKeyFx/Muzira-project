import styled from "styled-components";
import Cover from "/src/assets/layout/playlistCover.png";

const Item = styled.div`
  background-color: var(--color--fade-black);
  width: 100%;
  min-width: 100px;
  height: auto;
  cursor: pointer;

  &:hover {
    transform: scale(0.95);
    transition: all 0.5s;
  }
`;
const ImageContainer = styled.div`
  img {
    width: 100%;
    min-width: 100px;
    height: auto;
  }
`;

const ItemDetails = styled.div`
  padding: 5px 2px 5px 10px;
  span {
    /* display: grid; */
    color: var(--color-primary);
  }

  p {
    margin: 0;
    font-weight: 600;
    margin-bottom: 2rem;
  }
`;

function ArtistPlayedItem() {
  return (
    <Item>
      <ImageContainer>
        <img src={Cover} alt="PlayList Cover" />
      </ImageContainer>
      <ItemDetails>
        <p>Limoblaze</p>
        <span>30k Followers</span>
      </ItemDetails>
    </Item>
  );
}

export default ArtistPlayedItem;
