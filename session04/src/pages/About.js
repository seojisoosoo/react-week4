import React from "react";
import { Outlet } from "react-router-dom";
// import { Link } from "react-router-dom";
// import data from "../data/Information";
import UserNavbar from "../components/UserNavbar";

const About = () => {
  return (
    <>
      <UserNavbar />
      <Outlet />
    </>
  );
};

export default About;
