import styled from "styled-components";
import { customers } from "../data";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import SingleHappyCustomer from "./SingleHappyCustomer";

const winWidth = window.innerWidth;
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};
const HappyCustomers = () => {
  const [width, setWidth] = useState(winWidth);
  return (
    <Wrapper className="container section">
      <h1>
        Happy <span className="red">Customers</span>
      </h1>
      <div className="carousel">
        <Carousel indicators={false} controls={true} variant="dark">
          <Carousel.Item interval={1500}>
            <img
              style={{ height: "80px" }}
              className="d-block m-auto"
              src="https://i.imgur.com/46HVgK2.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              style={{ height: "80px" }}
              className="d-block m-auto"
              src="https://i.imgur.com/WBXvDJn.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              style={{ height: "80px" }}
              className="d-block m-auto"
              src="https://i.imgur.com/3DgnbqL.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              style={{ height: "80px" }}
              className="d-block m-auto"
              src="https://i.imgur.com/t3oJhnS.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              style={{ height: "80px" }}
              className="d-block m-auto"
              src="https://i.imgur.com/PlxeERi.png"
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
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
  .carousel {
    padding-top: 40px;
    padding-bottom: 20px;
  }
`;
