import styled from "styled-components";
import logo from "../assets/Images/navbar-logo.svg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { navItems } from "../data";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NavIcon from "../assets/Images/iPhone 13/Group 1000001784.svg";
import { openNavbar, closeNavbar } from "../features/app/appSlice";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { handleClick } from "../utils";
const MobileNav = () => {
  const dispatch = useDispatch();
  const { isNavbarOpen } = useSelector((store) => store.app);

  return (
    <>
      <Wrapper className="container">
        <img src={logo} alt="" />
        <button type="button" onClick={() => dispatch(openNavbar())}>
          <HiMenuAlt3 />
        </button>
      </Wrapper>
      <NavWrapper className={!isNavbarOpen && "hide-navbar"}>
        <div className="container">
          <div className="top">
            <img src={logo} alt="" />
            <button type="button" onClick={() => dispatch(closeNavbar())}>
              <AiOutlineClose />
            </button>
          </div>
          <ul>
            {navItems.map((item, i) => {
              const { name, link } = item;
              return (
                <li key={i}>
                  <Link
                    to={link}
                    key={i}
                    className="link"
                    onClick={() => dispatch(closeNavbar())}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="icons">
          <button onClick={() => handleClick("linkedin")}>
            <FaLinkedin />
          </button>
          <button onClick={() => handleClick("instagram")}>
            <FaInstagram />
          </button>
          <button onClick={() => handleClick("facebook")}>
            <FaFacebook />
          </button>
          <button onClick={() => handleClick("tiktok")}>
            <FaTiktok />
          </button>
          <button onClick={() => handleClick("youtube")}>
            <FaYoutube />
          </button>
        </div>
      </NavWrapper>
    </>
  );
};
export default MobileNav;
const NavWrapper = styled.nav`
  position: fixed;
  color: white;
  top: 0;

  z-index: 10;
  background-image: linear-gradient(to bottom right, #ef3d2c, #9f2a1f);
  width: 100%;
  height: 100vh;
  .top {
    display: flex;
    justify-content: space-between;
    button {
      background-color: transparent;
      border: none;
      color: white;
      font-size: 28px;
      padding-top: 20px;
    }
  }
  li {
    margin-top: 50px;
    font-size: 24px;
  }
  img {
    width: 100px;
    padding-top: 20px;
  }
  transition: all ease-in-out 0.5s;
  .icons {
    display: flex;
    justify-content: space-between;
    width: 70%;
    position: absolute;
    bottom: 120px;
    left: 50%;
    transform: translateX(-50%);
    svg {
      margin-right: 10px;
      font-size: 25px;
      cursor: pointer;
    }
    button {
      border: none;
      background-color: transparent;
      color: white;
      padding: 0px;
    }
  }
  @media (min-width: 1099px) {
    display: none;
  }
`;
const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  img {
    width: 100px;
  }
  button {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 28px;
    padding: 0px;
  }

  @media (min-width: 1099px) {
    display: none;
  }
`;
