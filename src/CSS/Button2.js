import styled from "styled-components";

export default styled.button`
  font-family: "Roboto", sans-serif;
  transition-duration: 0.4s;
  position: relative;
  right: -15px;
  top: -3px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 50%;
  padding: 15px 20px;
  margin: 3px 3px;
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  border: 2px solid palevioletred;
  &:hover {
    background: palevioletred;
    color: white;
  }
`;
