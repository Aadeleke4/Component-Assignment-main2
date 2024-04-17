import React from "react";
import styled from "styled-components";
import { HeroProps } from "./Hero.types";

const StyledHero = styled.div<{ backgroundColor: string; disabled?: boolean }>`
  width: 1920px;
  height: 1080px;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img<{ disabled?: boolean }>`
  width: 100%;
  height: auto;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const Hero: React.FC<HeroProps> = ({ src, disabled = false }) => {
  return (
    <StyledHero backgroundColor="#fff" disabled={disabled}>
      <StyledImage src={src} disabled={disabled} />
    </StyledHero>
  );
};

export default Hero;
