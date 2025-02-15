import styled from "styled-components";
import FaveImage from "../assets/layout/faveScatta.png";

const ListDiv = styled.div`
  img {
    display: flex;
    width: 100%;
    min-width: 100px;
    height: auto;
    border-radius: 4px;
  }
`;

const ArtistDetails = styled.div`
  display: grid;
  font-size: 13px;
`;
function ListItem({ index }) {
  return (
    <ListDiv>
      <div>
        <img src={FaveImage} alt="fave" />
      </div>
      <ArtistDetails>
        <span>Scatta Scatta</span>
        <span>Fave</span>
      </ArtistDetails>
    </ListDiv>
  );
}

export default ListItem;
