import styled from 'styled-components';

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

    &:hover svg {
      opacity: 0.7;
      transition: opacity 0.3s ease;
    }
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 200px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }
`;
