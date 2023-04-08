import styled from "styled-components";
import logo from "../assets/Images/Logo.svg";
import { Link } from "react-router-dom";
import { navItems } from "../data";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
const Footer = () => {
  const handleClick = (platform) => {
    let url = "via.com";
    if (platform === "linkedin") {
      url = "linkedin.com";
    }
    if (platform === "linkediinstagram") {
      url = "instagram.com";
    }
    if (platform === "facebook") {
      url = "facebook.com";
    }
    if (platform === "tiktok") {
      url = "tiktok.com";
    }
    if (platform === "youtube") {
      url = "youtube.com";
    }
    window.location.replace(`https://${url}`);
  };
  return (
    <div className="div gray-bg">
      <Wrapper className="container section">
        <div className="box">
          <img src={logo} alt="" />
          <p>
            We are one of the leading student organizations established within
            Cairo University that helps students reduce the gap between them and
            multinational corporates.
          </p>
        </div>
        <div className="box">
          <h5>Navigation</h5>
          <ul>
            {navItems.map((item, i) => {
              const { name, link } = item;
              return (
                <li key={i}>
                  <Link to={link} key={i}>
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="box">
          <h5>CONTACTS</h5>
          <p className="gray">EMAIL</p>
          <p>VIA.Club.CU16@gmail.com</p>
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
        </div>
      </Wrapper>
      <div className="red-bar"></div>
    </div>
  );
};
export default Footer;
const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  .box {
    flex: 0.25;
  }

  li {
    margin-top: 10px;
  }
  li a {
    color: black;
  }
  .box {
    img {
      margin-bottom: 30px;
    }
    h5 {
      margin-bottom: 30px;
      font-weight: bold;
    }
    .icons {
      margin-top: 40px;
      svg {
        margin-right: 10px;
        font-size: 25px;
        cursor: pointer;
      }
      button {
        border: none;
      }
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;

    .box {
      margin-top: 40px;
      text-align: center;
    }
  }
`;
