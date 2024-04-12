import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';



const CardContainer = styled.div<CardProps>`
  width: 200px;
  height: 300px;
  border: 1px solid #000;
  position: relative;
  overflow: hidden;
  background-image: url(${(props) => props.defaultImage});
  background-size: auto 100%; 
  background-repeat: no-repeat;
  background-position: center; 
  transition: background-image 0.3s ease-in-out;
  border-radius: 15px;
  
`;

const CardText = styled.div<{ backgroundColor?: string }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  padding: 8px;
  background-color: ${(props) => props.backgroundColor || 'black'};
  color: white;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  
  ${CardContainer}:hover & {
    opacity: 1;
  }
`;

const Card: React.FC<CardProps> = ({
  defaultImage,
  backgroundColor,
  text = 'Lorem Ipsum', 
  disabled = false, 
}) => (
  <CardContainer
    defaultImage={defaultImage}
    disabled={disabled}
  >
    <CardText backgroundColor={backgroundColor}>{text}</CardText>
  </CardContainer>
);

export default Card;