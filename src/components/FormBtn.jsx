import React from "react";
import styled from "styled-components";
import { clearForm, submitForm } from "../features/app/appSlice";

import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
const FormBtn = () => {
  const { name, email, phone, message } = useSelector((store) => store.app);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (!name || !email || !phone || !message) {
      toast.error("Please fill all input fields...");
      return;
    }
    // { name, email, phone, message }
    submitForm({ name, email, phone, message });
    dispatch(clearForm());
    toast.success("Form has been submitted...");
  };
  return (
    <div className="form-btn">
      <Wrapper type="submit" value="Submit" onClick={() => handleSubmit()}>
        Send Message
      </Wrapper>
    </div>
  );
};
export default FormBtn;
const Wrapper = styled.button`
  padding: 10px 20px;
  outline: none;
  background-color: transparent;
  border: 1px solid #ef3d2c;
  color: black;
  cursor: pointer;
  transition: all 0.5s ease;

  :hover {
    background-color: #ef3d2c;
    color: white;
  }
`;
