import styled from "styled-components";
import Header from "./Header";
import SideBar from "./SideBar";
import HomePage from "../pages/Homepage";
import { Outlet } from "react-router";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(5rem, 15rem) 1fr;
  grid-template-rows: auto 1fr;
  background-color: var(--color-black);
  min-height: 100dvh;

  @media (max-width: 900px) {
    grid-template-columns: minmax(4rem, 5rem) 1fr;
  }
`;

const Main = styled.main`
  padding: 1rem 4.2rem 6.4rem;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <SideBar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
