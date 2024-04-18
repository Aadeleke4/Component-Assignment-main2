import React from "react";
import styled from "styled-components";

// Define props for styled components to avoid TypeScript errors
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
  background-image: ${(props) => (props.defaultImage? `url(${props.defaultImage})` : "none")};
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-image 0.3s ease-in-out;
  border-radius: 15px;
  opacity: ${(props) => (props.disabled? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled? "none" : "auto")};
  filter: ${(props) => (props.disabled? "grayscale(100%)" : "none")};
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
  background-color: ${(props) => props.backgroundColor || "rgba(0, 0, 0, 0.7)"}; // Added a default semi-transparent black background
  color: white;
  text-align: center;
  opacity: ${(props) => (props.isVisible? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

// Define the component props type explicitly
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
    data-default-image={defaultImage}
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