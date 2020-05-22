import styled from "styled-components";

export default styled.div`
  position: relative;
  top: ${(props) => (props.list ? "-359px" : "50px")};
  text-align: center;
  font-size: 30px;
  font-family: "Karla", sans-serif;
  color: ${(props) => props.primary};
  padding: 10px 25px;
`;
