import styled from "styled-components";

export default styled.button`
  transition-duration: 0.4s;
  font-size: 20px;
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;

  &:hover {
    background: palevioletred;
    color: white;
  }
`;
