import styled from "styled-components";
import FormRow from "./FormRow";
import FormBtn from "./FormBtn";
import { handleFormChange } from "../features/app/appSlice";
import { useSelector, useDispatch } from "react-redux";
const FormCompononet = () => {
  const dispatch = useDispatch();
  const { name, email, phone, message } = useSelector((store) => store.app);
  const handleInput = (e) => {
    dispatch(handleFormChange({ name: e.target.name, value: e.target.value }));
  };
  return (
    <Wrapper className=" container section section-center">
      <div className="form">
        <form
          action="https://api.sheetmonkey.io/form/ob2AphM6msSxz711poFhGu"
          method="post"
        >
          <FormRow
            labelText={"Full Name"}
            type={"text"}
            name={"name"}
            value={name}
            placeholder={"Enter your name..."}
            handleChange={handleInput}
          />
          <FormRow
            labelText={"Email"}
            type={"email"}
            name={"email"}
            value={email}
            placeholder={"ex: example@gmail.com"}
            handleChange={handleInput}
          />
          <FormRow
            labelText={"Phone Number"}
            type={"text"}
            name={"phone"}
            value={phone}
            placeholder={"ex: 01234567891"}
            handleChange={handleInput}
          />
          <FormRow
            labelText={"Message"}
            type={"text"}
            name={"message"}
            value={message}
            placeholder={"Write your message.."}
            handleChange={handleInput}
          />
        </form>
        <FormBtn />
      </div>
    </Wrapper>
  );
};
export default FormCompononet;
const Wrapper = styled.div`
  width: 100%;
  position: relative;
  .form {
    position: relative;
    width: 100%;
    padding: 50px;
    -webkit-box-shadow: 0px 0px 33px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 33px 1px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 33px 1px rgba(0, 0, 0, 0.75);
  }
`;
