import styled from "styled-components";
import image from "../assets/Images/whyUsBg.svg";
import { whyUsInfo } from "../data";
import WhyUsComponent from "./WhyUsComponent";
import { motion } from "framer-motion";
import { variantsCont } from "../utils";
import { children } from "../utils";
const WhyUs = () => {
  return (
    <motion.div
      className="why-us"
      variants={variantsCont}
      initial="offscreen"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
    >
      <Wrapper className="container section">
        <h1>Why Choose Us?</h1>
        <div className="info">
          {whyUsInfo.map((info, id) => {
            return <WhyUsComponent key={id} {...info} />;
          })}
        </div>
      </Wrapper>
    </motion.div>
  );
};
export default WhyUs;
const Wrapper = styled(motion.section)`
  h1 {
    text-align: center;
    font-size: 50px;
    font-weight: 600;
  }
  color: white;
  /* background-image: url(${image}); */

  .info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }
  @media (max-width: 800px) {
    .info {
      padding-left: 0px;
      justify-content: space-around;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }
`;
