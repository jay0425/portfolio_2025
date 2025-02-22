import styled from 'styled-components';

export const Intro = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  div {
    padding-top: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 5rem;
  }

  h3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* margin-left: 25rem; */

    strong {
      font-size: 200%;
      transition: all 0.2s ease-in-out;
      position: relative;
    }

    strong::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 50%;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #2980b9;
      transition: all 0.2s ease-in-out;
      opacity: 0;
    }

    strong:hover {
      color: #2980b9;
    }

    strong:hover::before {
      top: -10px;
      opacity: 1;
    }
  }

  img {
    border-radius: 15px;
  }
`;
