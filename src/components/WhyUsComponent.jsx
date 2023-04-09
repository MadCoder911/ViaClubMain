import styled from "styled-components";
const WhyUsComponent = ({ number, text }) => {
  return (
    <Wrapper>
      <h1>{number}</h1>
      <p>{text}</p>
    </Wrapper>
  );
};
export default WhyUsComponent;
const Wrapper = styled.div`
  margin-top: 70px;
  position: relative;
  width: 220px;
  p {
    text-align: left;
  }
  h1 {
    margin: 0;
    text-align: left;
    width: fit-content;
  }
  @media (max-width: 700px) {
    width: 150px;
    h1 {
      font-size: 28px;
    }

    p {
      width: 100%;
    }
  }
`;
