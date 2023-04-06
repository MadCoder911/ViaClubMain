import styled from "styled-components";
import LandingBtn from "./LandingBtn";
import landingImage from "../assets/Images/landing-image.jpg";
const LandingComponent = ({ text, img, btn, addText }) => {
  return (
    <div className="container">
      <Wrapper style={{ backgroundImage: `url(${img})` }}>
        <div className="content">
          {text ? (
            <h1>{text}</h1>
          ) : (
            <h1>
              YOUR GATE <br />
              TO MULTINATIONALS
            </h1>
          )}
          {btn && <LandingBtn />}
          {addText && <p>{addText}</p>}
        </div>
      </Wrapper>
    </div>
  );
};
export default LandingComponent;
const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: 100vw;
  color: white;
  background-size: cover;
  h1 {
    text-align: center;
    font-size: 60px;
  }
  .content {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  button {
    top: 0;
  }
  p {
    font-size: 20px;
    position: relative;
    top: -10px;
    padding: 0;
    margin: 0;
  }
`;
