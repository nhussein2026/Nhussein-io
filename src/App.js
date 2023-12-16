// import logo from './logo.svg';
import "./App.css";
import ComingSoon from "./components/coming-soon/ComingSoon";
import Cursor from "./components/cursor/Cursor";
import Timeline from "./components/timeline/Timeline";
import data from "./data/data";
import { Routes, Route } from 'react-router-dom'

function App() {
  //destracting data file
  const { socialMedia } = data;
  return (
    <>
      {/* <Routes>
        <Route path='/' element={<ComingSoon />} />

        <Route path='/timeline' element={<Timeline />} />
      </Routes> */}
      <Timeline />
      <Cursor />
    </>
  );
}

export default App;
