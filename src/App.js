import Home from "./pages/Home/Home";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Error from './pages/Error/Error';
import SinglePage from "./pages/SinglePage/SinglePage";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<SinglePage/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </>
  );
}

export default App;
