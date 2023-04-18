import styled from "styled-components";
const FormRow = ({
  labelText,
  type,
  name,
  value,
  placeholder,
  handleChange,
}) => {
  return (
    <Wrapper>
      <label>{labelText}</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};
export default FormRow;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  label {
    font-weight: bold;
    margin-bottom: 20px;
  }
  input {
    border: none;
    border-bottom: 2px solid black;
    width: 100%;
    outline: none;
    padding-bottom: 10px;
  }
`;
