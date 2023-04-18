import styled from "styled-components";
import { Link } from "react-router-dom";
const LandingBtn = () => {
  return (
    <Wrapper className="btn">
      <Link to="/contact">Contact Us</Link>
    </Wrapper>
  );
};
export default LandingBtn;
const Wrapper = styled.button`
  margin: auto;
  position: relative;
  top: -170px;
  border-radius: 0;
  a {
    color: inherit;
  }
`;
