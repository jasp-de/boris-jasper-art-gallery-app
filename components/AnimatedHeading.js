import styled, { keyframes } from "styled-components";

const crazyAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(600px) rotate(0deg) scale(0.1);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotate(0deg) scale(1);
  }
`;

const StyledHeading = styled.h1`
  font-size: 2.5rem;
  color: #4a90e2;
  text-align: center;
  animation: ${crazyAnimation} 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

export default function AnimatedHeading() {
  return <StyledHeading>BJ Art Gallery</StyledHeading>;
}
