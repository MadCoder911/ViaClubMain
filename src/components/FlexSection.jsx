import styled from "styled-components";
import { landingSectionTexts } from "../data";
import { motion } from "framer-motion";
import { variantsCont } from "../utils";
const FlexSection = () => {
  return (
    <Wrapper
      variants={variantsCont}
      initial="offscreen"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      className="gray-bg"
    >
      <div className="container  section section-center">
        <div className="box">
          <h1>
            Our <span className="red">Vision</span>
          </h1>
          <p>
            “To be the leading student organization in developing students and
            enhancing employability across the Egyptian market.”
          </p>
        </div>

        <div className="box">
          <h1>
            Our <span className="red">Mission</span>
          </h1>
          <p>
            “Providing professional capacity building programs and internships'
            opportunities that improve students' vocational and interpersonal
            skills and facilitate their penetration to the labor market.”
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default FlexSection;
const Wrapper = styled(motion.section)`
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    align-items: center;
    justify-content: center;
  }
  .box {
    text-align: center;
    height: 300px;
    p {
      text-align: center;
      margin: auto;
    }
  }
  h1 {
    font-size: 50px;
    font-weight: 600;
  }
  p {
    line-height: 1.6;
    width: 80%;
    font-size: 17px;
  }

  @media (min-width: 800px) {
  }
`;
