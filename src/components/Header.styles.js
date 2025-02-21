// Header.styles.js

import styled, { css, keyframes } from 'styled-components';

export const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideUp = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

export const Header = styled.header`
  background-color: rgb(207, 203, 203);
  padding: 1rem 10.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const Logo = styled.h1`
  cursor: pointer;
  a {
    text-decoration: none;
    color: black;
  }
`;

export const MenuButton = styled.button`
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  span {
    display: block;
    width: 100%;
    height: 4px;
    background-color: black;
    transition: transform 0.3s ease, opacity 0.3s ease;
    position: relative;
  }

  span:nth-child(1) {
    margin-bottom: 3px;
  }
  span:nth-child(2) {
    margin-bottom: 3px;
  }

  ${({ open }) =>
    open &&
    css`
      span:nth-child(1) {
        transform: rotate(45deg);
        top: 6px;
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: rotate(-45deg);
        top: -7px;
      }
    `}

  @media (max-width: 768px) {
    display: block;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const DesktopNav = styled.nav`
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: black;

    &:hover {
      color: #886f6f;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileNav = styled.nav`
  width: 100%;
  display: ${({ open }) => (open ? 'flex' : 'flex')}; /* 항상 flex로 두고 */
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: absolute;
  top: 70px;
  right: 0;
  background-color: rgb(207, 203, 203);
  padding: 1rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-20px)')};
  opacity: ${({ open }) => (open ? '1' : '0')};

  a {
    text-decoration: none;
    color: black;

    &:hover {
      color: #886f6f;
      cursor: pointer;
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
