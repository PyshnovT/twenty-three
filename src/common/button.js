import React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: relative;
  // margin: 0;
  padding: 0;
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
`;

const Border = styled.div`
  position: absolute;
  top: -4px;
  left: 4px;
  right: -4px;
  bottom: 4px;
  border: 2px solid #111;
  z-index: 0;

  @media screen and (min-width: 768px) {
    top: -6px;
    left: 6px;
    right: -6px;
    bottom: 6px;
  }
`;

const Content = styled.div`
  // position: absolute;
  // top: 0px;
  // left: 0px;
  // right: 0px;
  // bottom: 0px;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;

  font-size: 18px;
  line-height: 24px;
  color: #fff;

  background-color: #f06464;
  z-index: 10;

  @media screen and (min-width: 768px) {
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 35px;
    padding-right: 35px;

    font-size: 22px;
    line-height: 28px;
  }
`;

export default title => (
  <Button>
    <Border />
    <Content>ОБМЕНЯТЬ</Content>
  </Button>
);
