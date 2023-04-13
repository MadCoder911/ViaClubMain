import styled from "styled-components";
import { motion } from "framer-motion";
import { children } from "../utils";
const WhyUsComponent = ({ number, text }) => {
  return (
    <Wrapper variants={children}>
      <h1 className="title">{number}</h1>
      <p>{text}</p>
    </Wrapper>
  );
};
export default WhyUsComponent;
const Wrapper = styled(motion.div)`
  margin-top: 70px;
  position: relative;
  width: 220px;
  p {
    text-align: left;
  }
  .title {
    font-size: 45px;
    margin: 0;
    text-align: left;
    width: fit-content;
  }
  @media screen and (max-width: 1000px) {
    width: 175px;
    .title {
      font-size: 28px;
    }

    p {
      width: 100%;
    }
  }
`;
