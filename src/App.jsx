import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Login from "./features/auth/Login";
import SignUp from "./features/auth/SignUp";
import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/Homepage";
import Library from "./pages/Library";
import PlayList from "./pages/PlayList";
import Songs from "./features/Library/Songs";
import PageNotFound from "./pages/PageNotFound";
import AlbumPage from "./features/Library/AlbumPage";
import NowPlayingPage from "./features/Library/NowPlayingPage";
import FavouritePage from "./features/Library/FavouritePage";
import BrowseCategories from "./pages/BrowseCategories";
import Profile from "./pages/Profile";
import Favourites from "./pages/Favourites";
import CreatePlayList from "./pages/CreatePlayList";
import LandingPage from "./ui/LandingPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import SplashScreen from "./ui/SplashScreen";
import ProtectedRoute from "./ui/ProtectedRoutes";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-right"
        />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="/" element={<Test />} /> */}
            <Route path="login" element={<Login />} />
            {/* <Route path="login" element={<SplashScreen />} /> */}
            <Route path="sign-up" element={<SignUp />} />

            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              {/* <Route index element={<Navigate replace to="home" />} /> */}
              <Route path="home" element={<HomePage />} />
              <Route path="library" element={<Library />}>
                <Route index element={<Navigate replace to="song" />} />
                <Route path="song" element={<Songs />} />
                <Route path="album" element={<AlbumPage />} />
                <Route path="now-playing" element={<NowPlayingPage />} />
                <Route path="favourites" element={<FavouritePage />} />
                <Route path="favourites" element={<FavouritePage />} />
              </Route>
              <Route path="playlist" element={<PlayList />} />
              <Route path="browse" element={<BrowseCategories />} />
              <Route path="profile" element={<Profile />} />
              <Route path="favorites" element={<Favourites />} />
              <Route path="create-playlist" element={<CreatePlayList />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-primary)",
              color: "var(--color-white)",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
