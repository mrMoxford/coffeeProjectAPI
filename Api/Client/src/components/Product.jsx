import React from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { BsChatHeart } from "react-icons/bs";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  position: relative;
  background: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  border-radius: 33px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transiton: scale 500ms ease-in-out;
  }
`;

const SmallCircle = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid hsla(104, 28%, 15%, 0.2);
  color: hsla(104, 28%, 15%, 1);
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  width: 2rem;
  height: 2rem;
  padding: 2rem;
`;

const Size = styled.p`
  font-size: minmax(0.5rem, 2rem);
  padding: 1rem;
`;
const Circle = styled.div`
  display: flex;
  flex-1;
  justify-content: center;
  align-items: center;
  background: white;
//   border-block: 2px solid hsla(104, 28%, 15%, 1);
  border-radius: 120px;
  width: 100%;
  aspect-ratio: 1/1.2;
  position: relative;
`;

const Image = styled.img`
  heigth: 40%;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

const PriceContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  color: white;
  aspect-ratio: 1/0.2;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background: hsla(360, 65%, 20%, 1);
  border-radius: 45px;
  margin-top: 1rem;
`;
const Price = styled.p`
  font-size: 1.5rem;
`;
const Icon = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  width: 2rem;
  aspect-ratio: 1;
`;
const Product = ({ item }) => {
  return (
    <Container>
      <Circle>
        <SmallCircle>
          <Size>{item.size}</Size>
        </SmallCircle>
        <Image src={item.image} />
      </Circle>

      <PriceContainer>
        <Price>{item.price}</Price>
        <Icon>
          <HiOutlinePlus color="hsla(104, 28%, 15%, 1)" size={30} />
        </Icon>
      </PriceContainer>
    </Container>
  );
};

export default Product;
