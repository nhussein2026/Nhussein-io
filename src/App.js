// import logo from './logo.svg';
// import "./App.css";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import MainContent from "./components/mainContent/MainContent";
import Navbar from "./components/navbar/Navbar";
import SocialMedia from "./components/socialMedia/SocialMedia";
import data from "./data/data";

function App() {
  //destracting data file
  const { socialMedia } = data;
  return (
    <>
      <Cursor />
      <Navbar />
      <MainContent />
    </>
  );
}

export default App;
