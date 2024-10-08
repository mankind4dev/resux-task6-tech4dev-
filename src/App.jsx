import { useState } from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Project from "./pages/Project";
import About from "./pages/About";
import Header from "./components/Header";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRouter";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact element={<PrivateRoute />}>
          <Route exact path="/project" element={<Project />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
