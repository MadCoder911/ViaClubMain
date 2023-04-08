import styled from "styled-components";
import image from "../assets/Images/whyUsBg.svg";
import { whyUsInfo } from "../data";
import WhyUsComponent from "./WhyUsComponent";

const WhyUs = () => {
  return (
    <div className="why-us">
      <Wrapper className="container section">
        <h1>Why Choose Us?</h1>
        <div className="info">
          {whyUsInfo.map((info, id) => {
            return <WhyUsComponent key={id} {...info} />;
          })}
        </div>
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
