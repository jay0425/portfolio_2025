import * as S from './AboutMe.styles.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faPerson, faGraduationCap, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const AboutMe = () => {
  return (
    <>
      <section id="about-me">
        <h2>ABOUT ME</h2>
        <S.AboutMeContent>
          <ul>
            <li>
              <S.AboutMeIcon>
                <FontAwesomeIcon icon={faPerson} size="3x" />
              </S.AboutMeIcon>
              <p>김재희</p>
            </li>
            <li>
              <S.AboutMeIcon>
                <FontAwesomeIcon icon={faGraduationCap} size="3x" />
              </S.AboutMeIcon>
              <p>강남대학교 국제지역학부 졸업</p>
              <p>/</p>
              <p>멋쟁이 사자처럼 프론트엔드 6기 수료</p>
              <p>/</p>
              <p>코멘토 웹개발 직무부트캠프 수료</p>
            </li>
            <li>
              <S.AboutMeIcon>
                <FontAwesomeIcon icon={faPhone} size="3x" />
              </S.AboutMeIcon>
              <div onClick="document.location.href='tel:전화번호'">
                <p>010-6601-5240</p>
              </div>
            </li>
            <li>
              <S.AboutMeIcon>
                <FontAwesomeIcon icon={faEnvelope} size="3x" />
              </S.AboutMeIcon>
              <p>heedev94@gmail.com</p>
            </li>
            <li>
              <S.AboutMeIcon>
                <a href="https://github.com/jay0425" target="_blank" rel="noreferrer noopener">
                  <FontAwesomeIcon icon={faSquareGithub} size="3x" />
                </a>
              </S.AboutMeIcon>
              <a href="https://github.com/jay0425" target="_blank" rel="noreferrer noopener">
                <p>github</p>
              </a>
            </li>
          </ul>
        </S.AboutMeContent>
      </section>
    </>
  );
};

export default AboutMe;
