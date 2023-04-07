import styled from "styled-components";
import image from "../assets/Images/whyUsBg.svg";
const WhyUs = () => {
  return (
    <div className="why-us">
      <Wrapper className="container section">
        <h1>Why Choose Us?</h1>
      </Wrapper>
    </div>
  );
};
export default WhyUs;
const Wrapper = styled.section`
  h1 {
    text-align: center;
    font-size: 50px;
    font-weight: 600;
  }
  color: white;
  background-image: url(${image});
  width: 100%;
  height: 70vh;
`;
