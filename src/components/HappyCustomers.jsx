import styled from "styled-components";
import { customers } from "../data";
// Import Swiper React components

import { useState } from "react";

const winWidth = window.innerWidth;

const HappyCustomers = () => {
  const [width, setWidth] = useState(winWidth);
  return (
    <Wrapper className="container section">
      <h1>
        Happy <span className="red">Customers</span>
      </h1>
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
