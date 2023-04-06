import logo from "../assets/Images/navbar-logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Wrapper className="container">
      <img src={logo} alt="logo" className="img" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/teams">Teams</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </Wrapper>
  );
};
export default NavBar;
const Wrapper = styled.nav`
  img {
    cursor: pointer;
    width: 125px;
  }
  z-index: 9999;
  position: relative;
  height: 72px;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    justify-content: space-between;
    color: black;
    li {
      margin-left: 40px;
      font-size: 16px;
      font-weight: 400;
      cursor: pointer;
      color: white;
      text-decoration: none;
    }
    li a {
      color: white;
    }
  }
`;
