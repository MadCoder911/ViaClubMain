import styled from "styled-components";
import { submitForm } from "../features/app/appSlice";
const FormBtn = () => {
  return (
    <Wrapper
      className="btn"
      type="submit"
      value="Submit"
      onClick={() => submitForm("abcd")}
    >
      Send Message
    </Wrapper>
  );
};
export default FormBtn;
const Wrapper = styled.button`
  border-radius: 0;
  color: black;
  margin-right: auto;
  width: fit-content;
  display: flex;
  text-align: end;
  align-items: flex-start;
`;
