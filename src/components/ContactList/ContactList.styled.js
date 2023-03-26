import styled from 'styled-components';

export const ContactListUl = styled.ul`
  list-style: disc;
  padding-left: 40px;
  margin-top: 10px;
`;
export const ContactListItem = styled.li``;
export const ContactItemDeleteBtn = styled.button`
  margin-left: 10px;
  border: 2px solid black;
  border-radius: 5px;
  line-height: 1;
  padding: 5px;
  color: black;
  font-weight: 700;
  background-color: white;
  :hover {
    background-color: black;
    color: white;
  }
  :active {
    color: red;
    border: 2px solid red;
  }
`;
