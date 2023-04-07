import styled from "styled-components";
import { customers } from "../data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import SwiperNavBtns from "../components/SwiperNavBtns";
import "swiper/css";
import { useState } from "react";

const winWidth = window.innerWidth;

const HappyCustomers = () => {
  const [width, setWidth] = useState(winWidth);
  return (
    <Wrapper className="container section">
      <h1>
        Happy <span className="red">Customers</span>
      </h1>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={width < 1000 ? "2" : "4"}
        pagination={{ clickable: true }}
        navigation
      >
        {customers.map((customer, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={customer.link} alt="customer" />
            </SwiperSlide>
          );
        })}
        <SwiperNavBtns />
      </Swiper>
    </Wrapper>
  );
};
export default HappyCustomers;
const Wrapper = styled.section`
  position: relative;
  text-align: center;
  h1 {
    text-align: center;
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 90px;
  }
  .swiper {
    width: 90%;
  }
`;
