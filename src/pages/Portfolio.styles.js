import { styled } from 'styled-components';

export const ContainerContent = styled.div`
  perspective: 1000px;
  height: 610px;

  text-align: center;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    width: 100%;
    height: 80%;
    object-fit: contain;
  }
`;

export const Box = styled.div`
  width: 290px;
  height: 460px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;

  ${ContainerContent}:hover & {
    transform: rotateY(180deg);
  }
`;

export const Front = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Back = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  background: #f8f8f8;
  transform: rotateY(180deg);
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const BackWrapper = styled.div`
  width: 90%;
  transform: scale(0.9);

  h4 {
    color: #2980b9;
    font-size: 1.3rem;
  }

  h6 {
    font-size: 0.8rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.2rem;
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;

    li {
      text-align: center;
      margin: 0 0.3rem;
      padding: 0.1rem 0.5rem;
      font-size: 1rem;
      color: white;
      background-color: #2980b9;
      border: 1px solid #2980b9;
      border-radius: 15px;
      white-space: normal;
    }
  }

  p {
    font-size: 1rem;
    margin: 1rem 0;
  }

  a {
    text-decoration: none;

    span {
      text-align: center;
      margin: 0 0.5rem;
      padding: 0.1rem 0.8rem;
      font-size: 1.5rem;
      color: white;
      background-color: pink;
      border: 1px solid pink;
      border-radius: 30px;
    }
  }
`;

export const BackTitles = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const BackHr = styled.hr`
  margin: 1rem 0 0 0;
`;

export const SkillItem = styled.li``;

export const CustomSwiperButtonPrev = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  width: 40px;
  height: 40px;
  cursor: pointer;
  left: 1px;

  img {
    width: 100%;
    height: auto;
  }
`;

export const CustomSwiperButtonNext = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  width: 40px;
  height: 40px;
  cursor: pointer;
  right: -1px;

  img {
    width: 100%;
    height: auto;
  }
`;
