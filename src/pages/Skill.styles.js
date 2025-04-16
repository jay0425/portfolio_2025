import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;

  span {
    font-size: 1.5rem;
    color: rgb(130, 130, 130);
    padding-bottom: 2rem;
  }
`;

export const SkillUl = styled.ul`
  padding: 20px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  position: relative;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;

    &:hover svg {
      opacity: 0.3;
      transition: opacity 0.3s ease;
    }
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.24);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 8px;
  width: 30%;
  text-align: center;
  z-index: 1000;

  opacity: 0;
  transform: translateX(-50%) translateY(10px);

  p {
    font-size: 1.5rem;
  }

  &.show {
    animation: ${fadeInUp} 0.8s ease-out forwards;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  height: 15px;
  border-radius: 10px;
  margin-top: 1rem;
  overflow: hidden;
  margin-bottom: 0.5rem;

  .bar {
    height: 100%;
    background-color: #4caf50; /* 기본 색상 */
    width: ${({ level }) => level}%;
    transition: width 0.5s ease-in-out;
  }
`;
