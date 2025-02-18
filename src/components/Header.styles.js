import styled from 'styled-components';

export const Header = styled.header`
  /* background-color: rgba(0, 0, 0, 0.3); */
  background-color: lightgray;
  padding: 1rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 1000;
`;

export const Logo = styled.h1`
  cursor: pointer;
  a {
    text-decoration-line: none;
    color: black;
  }
`;

export const Nav = styled.nav`
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration-line: none;
    color: black;

    &:hover {
      color: #886f6f;
      cursor: pointer;
    }
  }
`;
