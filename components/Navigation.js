import Link from "next/link";
import styled from "styled-components";

const NavBar = styled.nav`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f8f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  color: #4a90e2;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #4a90e2;
  }
`;

export default function Navigation() {
  return (
    <NavBar>
      <Title>BJ Gallery</Title>
      <NavLinks>
        <StyledLink href="/spotlight">Spotlight</StyledLink>
        <StyledLink href="/art-pieces">Pieces</StyledLink>
        <StyledLink href="/favorites">Favorites</StyledLink>
      </NavLinks>
    </NavBar>
  );
}
