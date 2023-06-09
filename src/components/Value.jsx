import styled from "styled-components";
import { motion } from "framer-motion";
import { children } from "../utils";
const Value = ({ title, text, img }) => {
  return (
    <Wrapper variants={children}>
      <img src={img} alt="image" />
      <h3 className="red">{title}</h3>
      <p>{text}</p>
    </Wrapper>
  );
};
export default Value;
const Wrapper = styled(motion.div)`
  margin-top: 40px;
  display: grid;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    margin: auto;
  }
  h3 {
    text-align: center;
    font-size: 18px;
  }
  p {
    color: #8d8d8d;
    line-height: 1.5;
    font-size: 15px;
    text-align: center;
    width: 80%;
    margin: auto;
  }
`;
