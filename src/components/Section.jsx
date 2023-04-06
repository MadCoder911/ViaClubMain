import styled from "styled-components";
import { landingSectionTexts } from "../data";
const Section = () => {
  return (
    <Wrapper className="container section section-center">
      <h1>
        About <br />
        <span className="red">VIA Club</span>
      </h1>
      <p>{landingSectionTexts[0].paragraph}</p>
    </Wrapper>
  );
};
export default Section;
const Wrapper = styled.section`
  p {
    width: 40%;
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
    right: 140px;
  }
`;
