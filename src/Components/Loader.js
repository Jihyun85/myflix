import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin-top: 20px;
  font-size: 28px;
`;
export default () => (
  <Container>
    <span role="img" aria-label="Loading">
      💖
    </span>
  </Container>
);
