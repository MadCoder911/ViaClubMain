import { useSwiper } from "swiper/react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import styled from "styled-components";
const SwiperNavBtns = () => {
  const swiper = useSwiper();
  return (
    <Wrapper>
      <button className="left-btn">
        <BsChevronLeft onClick={() => swiper.slidePrev()} />
      </button>
      <button className="right-btn">
        <BsChevronRight onClick={() => swiper.slideNext()} />
      </button>
    </Wrapper>
  );
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
