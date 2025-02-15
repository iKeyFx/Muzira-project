import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import Footer from "../ui/Footer";
// import Header from "../ui/Header";

const StyledPage = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--color-white);
  /* padding: 1rem; */

  p {
    color: var(--color-red);
  }

  div {
    /* background-color: var(); */
    width: 100%;
    /* padding: 1rem; */
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background-color: var(--color-black);
`;
function PageNotFound() {
  const navigate = useNavigate();
  return (
    <StyledPage>
      <StyledMain>
        <div>
          <h2>The page you're looking for can't be found.</h2>
          <p>Please check the URL and try again.</p>
        </div>
        <Button onClick={() => navigate(-1)}>
          <IoIosArrowRoundBack /> Go Back
        </Button>
      </StyledMain>
    </StyledPage>
  );
}

export default PageNotFound;
