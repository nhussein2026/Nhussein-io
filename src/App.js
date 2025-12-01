// import logo from './logo.svg';
import "./App.css";
import Cursor from "./components/cursor/Cursor";
import GitHubProfile from "./components/github-profile/GitHubProfile";
import Timeline from "./components/timeline/Timeline";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { NotFound } from "./components/404";
function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <Timeline />
      ) : (
        <>
          <Navbar />
          <div id="app-container">
            <Routes>
              <Route path="/github-profile" element={<GitHubProfile />} />
              {/* Catch-all route for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </>
      )}
      <Cursor />
    </>
  );
}

export default App;
