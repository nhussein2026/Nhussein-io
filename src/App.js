// import logo from './logo.svg';
// import "./App.css";
import ComingSoon from "./components/coming-soon/ComingSoon";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import MainContent from "./components/mainContent/MainContent";
import Navbar from "./components/navbar/Navbar";
import SocialMedia from "./components/socialMedia/SocialMedia";
import data from "./data/data";
import { Routes, Route } from 'react-router-dom'

function App() {
  //destracting data file
  const { socialMedia } = data;
  return (
    <>
      <Routes>
        <Route path='/' element={<ComingSoon />} />

        <Route path='nav' element={<Navbar />} />
        <Route path='main' element={<MainContent />} />
      </Routes>
      {/* <Cursor />
      <Navbar />
      <MainContent /> */}
    </>
  );
}

export default App;
