import styled from "styled-components";
import FaveImage from "../assets/layout/faveScatta.png";
import MusicComponent from "../components/MusicComponent";
import PlayBoard from "../ui/PlayBoard";
import useTrack from "../features/music/useTrack";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
function HomePage() {
  const Array = [1, 2, 4, 5];
  const { data } = useTrack();
  // console.log(data);
  return (
    <div>
      <Section>
        <MusicComponent heading="Top Picks" data={Array} />
      </Section>
      <Section>
        <MusicComponent heading="Recently Played" data={Array} />
      </Section>
      <Section>
        <MusicComponent heading="New Releases" data={Array} />
      </Section>

      <PlayBoard />
    </div>
  );
}

export default HomePage;
