import styled from "styled-components";

export default styled.button`
  position: ${(props) => (props.submit ? "absolute" : "relative")};
  right: ${(props) => (props.submit ? "325px" : "500px")};
  top: ${(props) => (props.submit ? "50px" : "-40px")};
  text-align: center;
  transition-duration: 0.4s;
  font-size: 20px;
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  border-radius: ${(props) => (props.circle ? "50%" : "3px")};
  border: 2px solid palevioletred;
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  margin: 0.5em 0.5em;
  padding: ${(props) => (props.circle ? ".75em .75em" : "0.5em 1em")};
  cursor: pointer;

  &:hover {
    background: palevioletred;
    color: white;
  }
`;
