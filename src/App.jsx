// import logo from './logo.svg';
// import './App.css';
// import tailwind from "tailwind";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AllDocuments from "./Components/AllDocuments";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AllBloodPressure from "./Components/AllBloodPressure";

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/alldocs" element={<AllDocuments/>} />
        <Route path="/allbp" element={<AllBloodPressure/>} />
      </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
