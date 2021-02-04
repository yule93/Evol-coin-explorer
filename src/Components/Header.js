import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0%;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  margin: 60px 10px;
`;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  width: default;
  height: default;
  margin: 0 10px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${(props) => (props.current ? "#edbd0d" : "transparent")};
  color: ${(props) => (props.current ? "#ffffff" : "#000000")};
`;
const SLink = styled(Link)`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Prices</SLink>
      </Item>
      <Item current={pathname === "/exchanges"}>
        <SLink to="/exchanges">Exchanges</SLink>
      </Item>
      <Item current={pathname === "/coins"}>
        <SLink to="/coins">Coins</SLink>
      </Item>
    </List>
  </Header>
));
