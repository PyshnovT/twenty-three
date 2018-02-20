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
`;

const NavigationLink = styled.a`
  margin-right: 20px;
  font-size: 14px;
  color: inherit;
  text-decoration: none;
`;

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
    width: auto;
    flex-basis: auto;
  }
`;

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
    <header class="container">
      <Wrapper class="row">
        <Logo src={require("./logo.svg")} />
        <NavigationWrapper>
          <Navigation>
            <NavigationLink href="#">ПРОЦЕСС ОБМЕНА</NavigationLink>
            <NavigationLink href="#">ПРЕИМУЩЕСТВА</NavigationLink>
            <NavigationLink href="#">ЧТО МОЖНО СДАТЬ</NavigationLink>
            <NavigationLink href="#">ТАРИФЫ</NavigationLink>
          </Navigation>
        </NavigationWrapper>
        <SocialsWrapper>
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
