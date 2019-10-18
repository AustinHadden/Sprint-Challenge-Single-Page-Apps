import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 40%;
    padding: 5%;
`;

const CardBody = styled.div`
    background: moccasin;
    padding: 20px;
    border-radius: 10px
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 25px;
`;

const Img = styled.img`
    width: 50% auto;
`;

const Traits = styled.ul`
    list-style-type: none;
`;

const TraitItem = styled.li`
    margin: 3% 0;
    font-size: 18px;
    font-weight: bold;
`;

export default function CharacterCard(props) {
  return (
    <Card>
      <CardBody>
        <Title>{props.name}</Title>
        <Img src={props.img} alt={props.name} />
        <Traits>
          <TraitItem>{props.species}</TraitItem>
          <TraitItem>{props.status}</TraitItem>
        </Traits>
      </CardBody>
    </Card>
  );
}
