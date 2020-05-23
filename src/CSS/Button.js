import styled from "styled-components";

export default styled.button`
  font-family: "Roboto", sans-serif;
  position: ${(props) => (props.submit ? "absolute" : "relative")};
  right: ${(props) => (props.submit ? "350px" : "525px")};
  top: ${(props) => (props.submit ? "60px" : "-270px")};
  text-align: center;
  transition-duration: 0.4s;
  width: ${(props) => (props.submit ? "" : "18%")};
  font-size: 18px;
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  border-radius: 18px;
  border: 2px solid palevioletred;
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  margin: 0.2em 0.5em;
  padding: 0.4em 0.9em;
  cursor: pointer;

  &:hover {
    background: palevioletred;
    color: white;
  }
`;
