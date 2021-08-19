import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.div`
  display: ${({ display }) => (display ? "flex" : "none")};
  background-color: ${({ light }) => (light ? "yellow" : "black")};
  width: 200px;
  height: 200px;
  margin: 20px;
  border-radius: 8px;
`;
