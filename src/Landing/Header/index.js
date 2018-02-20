import React from "react";
import styled from "styled-components";

const Container = styled.header``;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  padding-top: 10px;
  padding-bottom: 10px;

  @media screen and (min-width: 768px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

const NavigationWrapper = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const NavigationLink = styled.a`
  padding: 0;
  padding-left: 10px;
  padding-right: 10px;

  font-size: 14px;
  text-align: center;
  color: inherit;
  text-decoration: none;

  @media screen and (min-width: 992px) {
    padding-left: 20px;
    padding-right: 20px;
    border-right: 1px solid #ddd;
  }

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
    border: none;
  }
`;

const LogoWrapper = styled.div``;

const Logo = styled.img`
  display: none;
  width: 22px;
  height: 51px;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

const SocialsWrapper = styled.div`
  display: inline-block;

  width: 100%;
  flex-basis: 100%;

  @media screen and (min-width: 768px) {
  }
`;

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`;

const Social = styled.a`
  margin-right: 10px;
`;

const SocialImg = styled.img`
  width: 31px;
  height: 31px;
`;

export default () => {
  return (
    <header className="container">
      <Wrapper className="row">
        <LogoWrapper className="col-md-1">
          <Logo src={require("./logo.svg")} />
        </LogoWrapper>
        <NavigationWrapper className="col-md-10">
          <Navigation>
            <NavigationLink href="#">ПРОЦЕСС ОБМЕНА</NavigationLink>
            <NavigationLink href="#">ПРЕИМУЩЕСТВА</NavigationLink>
            <NavigationLink href="#">ЧТО МОЖНО СДАТЬ</NavigationLink>
            <NavigationLink href="#">ТАРИФЫ</NavigationLink>
          </Navigation>
        </NavigationWrapper>
        <SocialsWrapper className="col-md-1">
          <Socials>
            <Social href="#">
              <SocialImg src={require("./telegram.png")} alt="Telegram" />
            </Social>
            <Social href="#">
              <SocialImg src={require("./instagram.png")} alt="Instagram" />
            </Social>
          </Socials>
        </SocialsWrapper>
      </Wrapper>
    </header>
  );
};
