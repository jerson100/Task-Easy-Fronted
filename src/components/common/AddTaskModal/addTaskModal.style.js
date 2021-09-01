import styled from "styled-components";

const FormStyle = styled.form``;

const InputStyle = styled.input`
  padding: 0.5rem 1rem;
  border: solid 1px rgba(0, 0, 0, 0.14);
  border-radius: 5px;
  width: 100%;
  margin-bottom: 1rem;
  height: 40px;
  outline: none;
  &:focus {
    border: solid 1px red;
  }
`;

const LabelStyle = styled.label`
  font-size: 14px;
  margin-bottom: 0.5rem;
  display: inline-block;
`;

const TextAreaStyle = styled(InputStyle)`
  resize: none;
  min-height: 120px;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
`;

const TaskFooterStyle = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export { FormStyle, InputStyle, LabelStyle, TaskFooterStyle, TextAreaStyle };
