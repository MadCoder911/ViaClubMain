import styled from "styled-components";
import { customers } from "../data";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";
import { variantsCont } from "../utils";
const winWidth = window.innerWidth;

const HappyCustomers = () => {
  const [width, setWidth] = useState(winWidth);
  return (
    <Wrapper
      className="container section"
      variants={variantsCont}
      initial="offscreen"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
    >
      <h1>
        Happy <span className="red">Customers</span>
      </h1>
      <div className="carousel">
        <Carousel indicators={false} controls={true} variant="dark">
          {/* <Carousel.Item interval={1500}>
            <div className="item">
              <img
                style={{ height: "80px" }}
                className="d-flex m-auto"
                src="https://i.imgur.com/46HVgK2.png"
                alt="First slide"
              />
              <img
                style={{ height: "80px" }}
                className="d-flex m-auto"
                src="https://i.imgur.com/WBXvDJn.png"
                alt="First slide"
              />
              <img
                style={{ height: "80px" }}
                className="d-flex m-auto"
                src="https://i.imgur.com/3DgnbqL.png"
                alt="First slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <div className="item">
              <img
                style={{ height: "80px" }}
                className="d-flex m-auto"
                src="https://i.imgur.com/46HVgK2.png"
                alt="First slide"
              />
              <img
                style={{ height: "80px" }}
                className="d-flex m-auto"
                src="https://i.imgur.com/t3oJhnS.png"
                alt="First slide"
              />
              <img
                style={{ height: "80px" }}
                className="d-flex m-auto"
                src="https://i.imgur.com/PlxeERi.png"
                alt="First slide"
              />
            </div>
          </Carousel.Item> */}
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
const Wrapper = styled(motion.section)`
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
  .item {
    display: flex;
    justify-content: space-around;
  }
`;
