import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 20px;
  background-color: ${(props) => props.btnColor || "blue"};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonDom = styled.div`
  //   display: flex;
  //   justify-content: column;
`;
const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = (url) => {
    navigate(url);
  };

  return (
    <>
      <ButtonDom>
        <Button btnColor="green" onClick={() => navigate("/")}>
          {/* <Link to="/">Home</Link> */} Home
        </Button>
        <Button btnColor="orange" onClick={() => navigate("/about")}>
          {/* <Link to="/about">About</Link> */} About
        </Button>
        <Button btnColor="blue" onClick={() => handleClick("love")}>
          {/* <Link to="/love">Love</Link> */} Love
        </Button>
      </ButtonDom>
    </>
  );
};

export default Navbar;
