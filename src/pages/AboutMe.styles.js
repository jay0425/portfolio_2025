import styled from 'styled-components';

export const AboutMeContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    display: flex;
    flex-direction: column;

    li {
      padding-bottom: 2rem;
      list-style: none;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 3rem;

      p {
        float: left;
      }
    }
  }
`;

export const AboutMeIcon = styled.div`
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
