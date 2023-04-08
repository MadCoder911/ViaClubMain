import styled from "styled-components";
const SwiperNavBtns = () => {
  return <Wrapper></Wrapper>;
};
export default SwiperNavBtns;

const Wrapper = styled.div`
  position: relative;
  transform: translateY(-100px);
  z-index: 9999;
  width: 100%;
  button {
    font-size: 30px;
    border: none;
    font-weight: bold;
    background-color: transparent;
    cursor: pointer;
    transition: all ease-in-out 0.2s;

    border-radius: 10px;
  }
  button:hover {
    scale: 1.5;
  }
  .right-btn {
    position: absolute;
    right: -13px;
  }
  .left-btn {
    position: absolute;
    left: -13px;
  }
  @media (max-width: 1000px) {
    button {
      display: none;
    }
  }
`;
