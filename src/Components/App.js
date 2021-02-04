import React from "react";
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

const SH1 = styled.h1`
  font-size: 25px;
  padding: 0px 30px;
  margin-top: 30px;
  width: 240px;
  height: 50px;
`;

function App() {
  return (
    <div>
      <SH1>Coin Explorer</SH1>
      <Router />
      <GlobalStyles />
    </div>
  );
}
export default App;
