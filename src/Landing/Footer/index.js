import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  padding-top: 42px;
  padding-bottom: 50px;

  background-color: #0a0f13;
  color: #fff;

  @media screen and (min-width: 768px) {
    padding-top: 82px;
    padding-bottom: 88px;
  }
`;

const Title = styled.h4`
  margin: 0;

  font-size: 26px;
  font-weight: bold;
  line-height: 1.38;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 12px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    margin-bottom: 48px;
  }
`;

const Social = styled.span`
  display: flex;
  aling-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin-right: 15px;

  border: 1px solid rgba(255, 255, 255, 0.23);
  border-radius: 100%;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    margin-right: 35px;
    width: 75px;
    height: 75px;
  }

  :hover {
    background-color: #fff;
  }
`;

const SocialImg = styled.img`
  width: 25px;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 36px;
  }
`;

const Vk = SocialImg.extend`
  width: 24px;
`;

const Fb = SocialImg.extend`
  width: 10px;

  @media screen and (min-width: 768px) {
    width: 16px;
  }
`;

const Email = styled.span`
  font-size: 18px;
  line-height: 2;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export default () => (
  <Container>
    <div className="container">
      <div className="row">
        <Title className="col-xs-12">Расскажи о нас</Title>
        <Socials className="col-xs-12">
          <Social>
            <Vk src={require("./vk.svg")} />
          </Social>
          <Social>
            <Fb src={require("./fb.svg")} />
          </Social>
          <Social>
            <SocialImg src={require("./telegram.svg")} />
          </Social>
          <Social>
            <SocialImg src={require("./twitter.svg")} />
          </Social>
        </Socials>
        <Email className="col-xs-12">Для связи: info@23na8.ru</Email>
      </div>
    </div>
  </Container>
);
