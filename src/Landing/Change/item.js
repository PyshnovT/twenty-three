import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  // position: relative;
  // margin: 0;
  display: inline-block;
  padding: 0;

  // width: 230px;
  // height: 230px;

  @media screen and (min-width: 768px) {
    // width: 256px;
    // height: 256px;
  }
`;

const Content = styled.div`
  position: relative;
  // display: flex;
  // flex-direction: row;
  // align-items: center;
  // justify-content: space-between;
  text-align: center;
  margin-left: 12px;
  margin-right: 12px;

  // padding-top: 25px;
  // padding-bottom: 25px;

  background-color: #fff;
  border: 2px solid #000;

  width: 230px;
  height: 230px;

  @media screen and (min-width: 768px) {
    width: 256px;
    height: 256px;
  }
`;

const ImgWrapper = styled.div`
  padding-top: 20px;
  text-align: center;
`;

const Img = styled.img`
  height: 150px;
  width: auto;

  @media screen and (min-width: 768px) {
    height: 170px;
  }
`;

const Title = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  font-size: 22px;
  line-height: 60px;
  text-align: center;
  color: #090909;
`;

export default class Item extends React.Component {
  render() {
    return (
      <Wrapper className="">
        <Content>
          <ImgWrapper className="col-xs-12">
            <Img src={this.props.img} />
          </ImgWrapper>
          <Title className="col-xs-12">{this.props.title}</Title>
        </Content>
      </Wrapper>
    );
  }
}
