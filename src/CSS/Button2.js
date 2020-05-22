import styled from "styled-components";

export default styled.button`
  position: relative;
  right: -15px;
  top: -7px;
  text-align: center;
  transition-duration: 0.4s;
  font-size: 20px;
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  border-radius: 50%;
  border: 2px solid palevioletred;
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  padding: 0.75em 0.75em;
  cursor: pointer;

  &:hover {
    background: palevioletred;
    color: white;
  }
`;
