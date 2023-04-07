import styled from "styled-components";
import { ValuesSectionData } from "../data";
import Value from "./Value";
const ValuesSection = () => {
  return (
    <Wrapper className="container section">
      <h1>
        Our <span className="red">Values</span>
      </h1>
      <div className="content">
        {ValuesSectionData.map((value, i) => {
          const { title, text, img } = value;
          return <Value key={i} title={title} text={text} img={img} />;
        })}
      </div>
    </Wrapper>
  );
};
export default ValuesSection;
const Wrapper = styled.section`
  h1 {
    font-size: 60px;
    font-weight: 600;
    text-align: center;
  }
  .content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    justify-content: space-between;
    margin-top: 90px;
  }
`;
