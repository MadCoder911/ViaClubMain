import styled from "styled-components";
import { landingSectionTexts } from "../data";
const Section = () => {
  return (
    <Wrapper className="container section ">
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
