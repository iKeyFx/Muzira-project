import styled from "styled-components";
import ProfileAvatar from "../assets/layout/profileAvatar.png";
import ArtistPlayedItem from "../features/user/ArtistPlayedItem";
import { useUser } from "../features/auth/useUser";
import BounceLoader from "../ui/BounceLoader";

const Container = styled.div``;
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const ImageContainer = styled.div`
  img {
    width: 80px;
    height: 80px;
  }
`;
const UserDetails = styled.div`
  display: grid;
  row-gap: 0.5rem;
  p {
    margin: 0;
  }
  h4 {
    margin: 0;
    text-transform: uppercase;
    font-weight: 400;
  }
`;
const UserDetailsInfo = styled.div`
  display: flex;
  gap: 2rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      color: var(--color-primary);
    }
  }
`;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
`;

const RecentPlayConstainer = styled.div`
  h4 {
    margin-bottom: 10px;
  }
`;
function Profile() {
  const { user, isPending, isError } = useUser();
  const { followers, following, profieImage, firstName, lastName } = user;

  if (isPending) return <BounceLoader />;
  // if (isError && !isPending) return <p>Can't fetch Profile</p>;
  return (
    <Container>
      <UserContainer>
        <ImageContainer>
          <img src={ProfileAvatar} alt={`${firstName}Avatar `} />
        </ImageContainer>
        <UserDetails>
          <h4>
            {firstName} {lastName}
          </h4>
          <UserDetailsInfo>
            <div>
              <p>Playlist</p>
              <span>25</span>
            </div>
            <div>
              <p>Followers</p>
              <span>5</span>
            </div>
            <div>
              <p>Following</p>
              <span>10</span>
            </div>
          </UserDetailsInfo>
        </UserDetails>
      </UserContainer>
      <RecentPlayConstainer>
        <div>
          <h4>Recently Played Artist</h4>
        </div>
        <ItemContainer>
          <ArtistPlayedItem />
          <ArtistPlayedItem />
          <ArtistPlayedItem />
          <ArtistPlayedItem />
        </ItemContainer>
      </RecentPlayConstainer>
    </Container>
  );
}

export default Profile;
