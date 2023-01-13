import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import About from "../pages/About";
import UxUi from "../pages/UxUi";
import Web from "../pages/Web";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/uxui" element={<UxUi />} />
        <Route path="/web" element={<Web />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
