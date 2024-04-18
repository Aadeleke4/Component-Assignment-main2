import React from "react";
import styled from "styled-components";

type CardContainerProps = {
  defaultImage?: string;
  disabled: boolean;
};

const CardContainer = styled.div<CardContainerProps>`
  width: 200px;
  height: 300px;
  border: 1px solid #000;
  position: relative;
  overflow: hidden;
  background-image: url(${props => props.defaultImage});
  background-size: cover;  // Changed from auto 100% to cover for better image handling
  background-repeat: no-repeat;
  background-position: center;
  transition: background-image 0.3s ease-in-out;
  border-radius: 15px;
  opacity: ${props => props.disabled ? 0.5 : 1};
  pointer-events: ${props => props.disabled ? "none" : "auto"};
  filter: ${props => props.disabled ? "grayscale(100%)" : "none"};
`;

type CardTextProps = {
  backgroundColor?: string;
  isVisible: boolean;
};

const CardText = styled.div<CardTextProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  padding: 8px;
  background-color: ${props => props.backgroundColor || "rgba(0, 0, 0, 0.7)"};
  color: white;
  text-align: center;
  display: ${props => props.isVisible ? 'block' : 'none'};  // Using display for visibility
`;

type CardProps = {
  defaultImage?: string;
  backgroundColor?: string;
  text?: string;
  disabled?: boolean;
};

const Card: React.FC<CardProps> = ({
  defaultImage,
  backgroundColor,
  text = "Lorem Ipsum",
  disabled = false,
}) => (
  <CardContainer
    defaultImage={defaultImage}
    disabled={disabled}
    data-testid="card-container"
  >
    <CardText
      backgroundColor={backgroundColor}
      isVisible={!disabled}
      data-testid="card-text"
    >
      {text}
    </CardText>
  </CardContainer>
);

export default Card;
