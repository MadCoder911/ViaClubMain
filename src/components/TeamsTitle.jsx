import styled from "styled-components";
import { motion } from "framer-motion";
import { variantsCont } from "../utils";
const TeamsTitle = ({ text, grayBg }) => {
  const firstText = text.split(" ");
  const lastWord = firstText.pop();
  const needed = firstText.join(" ");
  return (
    <motion.div
      className={grayBg && "gray-bg"}
      variants={variantsCont}
      initial="offscreen"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
    >
      <Wrapper className="section container">
        <h1>
          {needed} <span className="red">{lastWord}</span>
        </h1>
      </Wrapper>
    </motion.div>
  );
};
export default TeamsTitle;
const Wrapper = styled.section`
  text-align: center;
  font-weight: bold;
  h1 {
    font-weight: 600;
    font-size: 50px;
    position: relative;
  }
  h1::before {
    content: " ";
    position: absolute;
    bottom: -10px;
    right: 37%;
    transform: translateX(-50%);
    width: 15%;
    height: 5px;
    background-color: red;
  }
`;
