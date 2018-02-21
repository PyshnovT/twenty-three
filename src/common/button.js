import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  position: relative;
  // margin: 0;
  padding: 0;
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;

  width: 166px;
  height: 50px;

  @media screen and (min-width: 768px) {
    width: 196px;
    height: 58px;
  }
`;

const Border = styled.div`
  position: absolute;
  top: -3px;
  left: 2px;
  right: -2px;
  bottom: 3px;
  border: 2px solid #111;
  z-index: 0;

  @media screen and (min-width: 768px) {
    top: -5px;
    left: 4px;
    right: -4px;
    bottom: 5px;
    border: 3px solid #111;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 2px;
  left: -2px;
  right: 2px;
  bottom: -2px;

  // padding-top: 10px;
  // padding-bottom: 10px;
  // padding-left: 20px;
  // padding-right: 20px;

  font-size: 18px;
  font-weight: 400;
  line-height: 52px;
  color: #fff;

  background-color: #f06464;
  z-index: 10;

  @media screen and (min-width: 768px) {
    // padding-top: 15px;
    // padding-bottom: 15px;
    // padding-left: 35px;
    // padding-right: 35px;

    font-size: 22px;
    line-height: 60px;
  }
`;

export default class Button extends React.Component {
  render() {
    return (
      <Wrapper onClick={this.props.onClick}>
        <Border />
        <Content>{this.props.title}</Content>
      </Wrapper>
    );
  }
}
