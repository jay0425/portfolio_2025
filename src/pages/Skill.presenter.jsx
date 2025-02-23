import * as S from './Skill.styles.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faJs,
  faReact,
  faSquareGit,
  faSquareGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';
import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Skill = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skills = [
    { icon: faHtml5, name: 'html5', description: 'HTML5 마크업 언어', color: 'red' },
    { icon: faCss3Alt, name: 'css3', description: 'CSS 스타일링', color: 'blue' },
    { icon: faSass, name: 'scss', description: 'SCSS 전처리기', color: 'rgb(121, 3, 83)' },
    { icon: faFileCode, name: 'tailwind css', description: 'Tailwind CSS 프레임워크', color: 'rgb(7, 158, 188)' },
    { icon: faJs, name: 'javascript', description: 'JavaScript 프로그래밍 언어', color: 'rgb(242, 245, 49)' },
    { icon: faReact, name: 'react', description: 'React 라이브러리', color: 'rgb(0, 209, 246)' },
    { icon: faFileCode, name: 'react query', description: 'React Query 데이터 관리', color: 'rgb(0, 209, 246)' },
    { icon: faSquareGit, name: 'git', description: '버전 관리 시스템', color: 'rgb(244, 79, 79)' },
    { icon: faSquareGithub, name: 'github', description: 'GitHub 저장소', color: 'rgb(38, 38, 38)' },
    { icon: faDisplay, name: 'netlify', description: 'Netlify 배포 플랫폼', color: 'rgb(97, 239, 232)' },
  ];

  return (
    <>
      <section id="skill">
        <h2>SKILL</h2>
        <S.SkillContainer>
          <span>아이콘에 마우스를 올리면 설명이 나타납니다</span>
          <S.SkillUl>
            {skills.map((skill, index) => (
              <li key={index} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                <FontAwesomeIcon icon={skill.icon} size="3x" color={skill.color} />
                <p>{skill.name}</p>
                {hoveredIndex === index && (
                  <S.ModalContent>
                    <h3>{skill.name}</h3>
                    <p>{skill.description}</p>
                  </S.ModalContent>
                )}
              </li>
            ))}
          </S.SkillUl>
        </S.SkillContainer>
      </section>
    </>
  );
};

export default Skill;
