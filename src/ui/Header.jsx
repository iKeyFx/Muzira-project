import SearchIcon from "../assets/search_icon.png";
import NotificationBell from "../assets/notification.png";
import ProfileSample from "../assets/profilePic.png";
import styled from "styled-components";
import { MdLogout } from "react-icons/md";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const StyledHeader = styled.header`
  display: flex;
  padding: 1rem 3rem;
`;

const Container = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputSearch = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  input {
    padding: 10px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    background-color: transparent;
    color: var(--color-white);
    font-size: 0.8rem;
    width: 100%;
    min-width: 320px;
    text-indent: 2rem;
    &::placeholder {
      color: #d9d9d9;
      opacity: 0.7;
    }

    &:focus {
      outline: 1px solid var(--color-primary);
    }
  }

  img {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 3%;
  }
`;

const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Profile = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
const LogoutIcon = styled(MdLogout)`
  color: var(--color-primary);
  cursor: pointer;
  width: 20px;
  height: auto;
`;
function Header() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const handleLogout = () => {
    // localStorage.removeItem("userId");
    // localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    queryClient.clear();
    navigate("/login", { replace: true });
  };
  return (
    <StyledHeader>
      <Container>
        <InputSearch>
          <input type="text" placeholder="Artist, Song, Lyrics and more" />
          <img src={SearchIcon} alt="Search Icon" />
        </InputSearch>

        <ProfileDiv>
          <img src={NotificationBell} alt="Bell" />
          <LogoutIcon onClick={handleLogout} />
          <Profile
            src={ProfileSample}
            alt="Profile"
            onClick={() => navigate("/profile")}
          />
        </ProfileDiv>
      </Container>
    </StyledHeader>
  );
}

export default Header;
