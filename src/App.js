// import logo from './logo.svg';
// import "./App.css";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import data from "./data/data";

function App() {
  //destracting data file
  const { socialMedia } = data;
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
    </>
  );
}

export default App;