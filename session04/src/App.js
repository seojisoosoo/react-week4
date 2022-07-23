import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Love from "./pages/Love";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import AboutWhom from "./components/AboutWhom";
const Box = styled.div`
  display: flex;
  justify-content: center;
`;

const App = () => {
  return (
    <>
      <Navbar />
      <Box>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}>
            <Route path=":nickname" element={<AboutWhom />} />
          </Route>
          <Route path="/love" element={<Love />}></Route>
        </Routes>
      </Box>
    </>
  );
};

export default App;
