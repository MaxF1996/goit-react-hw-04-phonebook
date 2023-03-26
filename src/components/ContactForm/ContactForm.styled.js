import styled from 'styled-components';

export const ContactFormBody = styled.form``;

export const ContactFormLabel = styled.label`
  display: block;
  font-weight: 700;
  font-size: 20px;
`;

export const ContactFormInput = styled.input`
  display: block;
  height: 30px;
  font-size: 18px;
  margin-bottom: 15px;
`;
export const ContactFormBtn = styled.button`
  display: block;
  border: 2px solid black;
  border-radius: 5px;
  line-height: 1;
  padding: 8px;
  color: black;
  font-weight: 700;
  background-color: white;
  :hover {
    background-color: black;
    color: white;
  }
  :active {
    color: green;
    border: 2px solid green;
  }
`;
