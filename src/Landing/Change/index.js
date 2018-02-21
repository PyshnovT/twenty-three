import React from "react";
import styled from "styled-components";
import Item from "./item";

const Container = styled.section`
  padding-top: 45px;
  padding-bottom: 70px;

  background-color: #ffebe2;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 86px;
  }
`;

const Title = styled.h2`
  margin: 0;

  text-align: center;
  font-size: 22px;
  font-weight: 400;

  color: #090909;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

const Carousel = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  overflow-x: scroll;

  margin-top: 30px;

  @media screen and (min-width: 768px) {
    margin-top: 58px;
  }

  @media screen and (min-width: 1600px) {
    justify-content: center;
  }
`;

const items = [
  {
    title: "Носки",
    img: "1.png"
  },
  { title: "Дезодорант", img: "2.png" },
  {
    title: "Гель для душа",
    img: "3.png"
  },
  {
    title: "Бритвенный станок",
    img: "4.png"
  },
  { title: "Пена для бритья", img: "5.png" },
  { title: "Кружка", img: "6.png" }
];

export default () => {
  return (
    <Container>
      <Title>ЧТО МОЖНО ОБМЕНЯТЬ?</Title>
      <Carousel>
        {items.map((item, index) => (
          <Item key={index} title={item.title} img={require("./" + item.img)} />
        ))}
      </Carousel>
    </Container>
  );
};
