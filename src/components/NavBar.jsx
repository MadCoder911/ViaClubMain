import logo from "../assets/Images/navbar-logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { navItems } from "../data";
import { children } from "../utils";
const containerVariants = {
  hidden: {
    y: -250,
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      delay: 0.2,
      bounce: 0.3,
      duration: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};
const NavBar = () => {
  return (
    <Wrapper
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition="animationTrans"
    >
      <img src={logo} alt="logo" className="img" />
      <ul>
        {navItems.map((item, i) => {
          const { name, link } = item;
          return (
            <motion.li variants={children} key={i}>
              <Link to={link} key={i}>
                {name}
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default NavBar;
const Wrapper = styled(motion.nav)`
  img {
    cursor: pointer;
    width: 125px;
  }
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 7.5%;
  height: 72px;
  display: flex;
  align-items: center;
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
  @media (max-width: 1100px) {
    display: none;
  }
`;
