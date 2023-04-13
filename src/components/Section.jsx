import styled from "styled-components";
import { motion } from "framer-motion";
import { landingSectionTexts } from "../data";
import { variantsCont } from "../utils";
const Section = () => {
  return (
    <Wrapper
      variants={variantsCont}
      initial="offscreen"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      className="container section "
    >
      <h1>
        About <br />
        <span className="red">VIA Club</span>
      </h1>
      <p>{landingSectionTexts[0].paragraph}</p>
    </Wrapper>
  );
};
export default Section;
const Wrapper = styled(motion.section)`
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(550px, 1fr));
  justify-content: space-between;
  align-items: center;

  p {
    width: 80%;
    line-height: 2;
  }
  h1 {
    width: 50%;
    font-size: 50px;
    position: relative;
    line-height: 1.5;
    font-weight: 600;
  }
  h1::before {
    content: "";
    z-index: 9999;
    position: absolute;
    width: 4px;
    height: 180%;
    background-color: #ef3d2c;
    top: -40px;
    right: 80px;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    h1,
    p {
      width: 100%;
      text-align: center;
    }
    h1::before {
      display: none;
    }
  }
`;
