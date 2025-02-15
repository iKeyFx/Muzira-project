import styled from "styled-components";
import Cover from "/src/assets/layout/playlistCover.png";

const Item = styled.div`
  background-color: var(--color--fade-black);
  width: 100%;
  min-width: 100px;
  height: auto;
  cursor: pointer;
  &:hover {
    transform: scale(0.9);
    transition: all 0.3s;
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
  padding: 5px 2px 5px 2px;
  span {
    /* display: grid; */
    color: var(--color-primary);
  }

  p {
    margin: 0;

    &:first-child {
      font-weight: 600;
    }
  }
`;
function PlayListItem() {
  return (
    <Item>
      <ImageContainer>
        <img src={Cover} alt="PlayList Cover" />
      </ImageContainer>
      <ItemDetails>
        <p>Music that heals</p>
        <p>
          Total songs: <span>20</span>
        </p>
        <p>
          By <span>John Doe</span>
        </p>
      </ItemDetails>
    </Item>
  );
}

export default PlayListItem;
