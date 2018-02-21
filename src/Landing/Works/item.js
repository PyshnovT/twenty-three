import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  // flex-basis: 100%;
  max-width: 256px;

  position: relative;

  padding: 0;
  text-align: center;

  &:first-child {
    // margin-left: 32px;
  }

  &:last-child {
    // margin-right: 32px;
  }

  @media screen and (min-width: 768px) {
    max-width: 320px;
    padding-bottom: 102px;
  }
`;

const W = styled.div`
  // position: relative;
`;

const ItemImage = styled.img`
  margin-top: 8px;
  width: 150px;
  height: 150px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const ItemBigImage = styled.img`
  display: none;
  width: 220px;
  height: 220px;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

const Index = styled.span`
  display: inline-block;
  position: absolute;
  left: 30px;

  font-size: 36px;
  line-height: 42px;
  color: #f06464;

  z-index: 10;

  @media screen and (min-width: 768px) {
    bottom: 0px;
    top: auto;
    left: 130px;
    width: 60px;
    height: 60px;

    font-size: 27px;
    line-height: 60px;
    color: #fff;

    background-color: #f06464;
    border-radius: 30px;
  }
`;

const Line = styled.span`
  display: none;
  position: absolute;
  bottom: 27px;

  height: 4px;
  width: 160px;

  background-color: #f06464;
  opacity: 0.16;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

const LeftLine = Line.extend`
  left: 0;

  ${props =>
    props.first &&
    css`
      opacity: 0;
    `};
`;

const RightLine = Line.extend`
  right: 0;

  ${props =>
    props.last &&
    css`
      opacity: 0;
    `};
`;

const Title = styled.h3`
  margin: 0;
  margin-top: 12px;

  font-size: 20px;
  line-height: 28px;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export default class Item extends React.Component {
  render() {
    return (
      <Wrapper className="col-xs-12">
        <W first={this.props.index == 1} last={this.props.index == 5}>
          <Index>{this.props.index}</Index>
          <ItemImage src={this.props.smallImg} alt="" />
          <ItemBigImage src={this.props.bigImg} alt="" />
          <Title>{this.props.title}</Title>
          <LeftLine first={this.props.index == 1} />
          <RightLine last={this.props.index == 5} />
        </W>
      </Wrapper>
    );
  }
}
