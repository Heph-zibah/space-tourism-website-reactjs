import { Route, Routes } from "react-router-dom";
import  Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import './index.scss'
import Nav from "./components/Nav";

const data = require('./starter-code/data.json')

function App() {
  return (
    <div className="">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/destination" element={<Destination/>} data={data.destination}/>
        <Route path="/crew" element={<Crew/>} />
        <Route path="/technology" element={<Technology/>} />
      </Routes>
    </div>
  );
}

export default App;
