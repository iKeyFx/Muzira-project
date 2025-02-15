import styled from "styled-components";
import Cover from "/src/assets/layout/playlistCover.png";

const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: scale(1.03);
    transition: 0.3s;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--backdrop-color-1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  color: var(--color-white);
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
`;
function BrowseList({ title }) {
  return (
    <ImageContainer>
      <Image src={Cover} alt="cover" />
      <Overlay>
        <Text>{title}</Text>
      </Overlay>
    </ImageContainer>
  );
}

export default BrowseList;
