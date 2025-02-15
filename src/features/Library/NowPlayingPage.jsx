import styled from "styled-components";
import PlayBoard from "../../ui/PlayBoard";
import PlayProgress from "./PlayProgress";
import PlayingImage from "/src/assets/layout/Essence-1.png";

const Conatainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Image = styled.img`
  max-width: 890px;
`;

const TitileDiv = styled.div``;
function NowPlayingPage() {
  return (
    <Conatainer>
      <div>
        <Image src={PlayingImage} alt="PlayingImage" />
        <TitileDiv>
          <span>Essence - Wizkid Feat. Tems</span>
        </TitileDiv>
      </div>
      {/* <PlayProgress />
      <PlayBoard /> */}
    </Conatainer>
  );
}

export default NowPlayingPage;
