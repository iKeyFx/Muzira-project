import styled from "styled-components";
import Fave from "/src/assets/layout/faveScatta.png";

const ListDiv = styled.div`
  /* img {
    display: flex;
    width: 100%;
    min-width: 100px;
    height: auto;
    border-radius: 4px;
  } */
`;

const ArtistDetails = styled.div`
  display: grid;
  font-size: 13px;
`;
const ImageContainer = styled.div`
  position: relative;
  border-radius: 8px;
  box-shadow: rgba(255, 255, 255, 0.3) -5px -5px, 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  max-width: 205px;
  max-height: 128px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    display: flex;
  }
`;
function AlbumItem() {
  return (
    <ListDiv>
      <ImageContainer>
        <img src={Fave} alt="album cover" />
      </ImageContainer>
      <ArtistDetails>
        <span>A Year withot Rain</span>
        <span>Selena Gomez</span>
      </ArtistDetails>
    </ListDiv>
  );
}

export default AlbumItem;
