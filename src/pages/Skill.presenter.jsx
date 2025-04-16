import { useState } from 'react';
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

const skillsDescription = [
  {
    name: 'html5',
    description:
      'HTML5 마크업 언어로 웹사이트의 구조를 정의하고, 시맨틱한 요소들을 사용하여 웹 페이지를 구성할 수 있습니다.',
    color: 'red',
    level: 90,
  },
  {
    name: 'css3',
    description:
      'CSS3를 사용하여 웹사이트의 스타일을 설정하고, Flexbox와 Grid 등을 활용하여 레이아웃을 구성할 수 있습니다.',
    color: 'blue',
    level: 90,
  },
  {
    name: 'scss',
    description: 'SCSS를 이용한 스타일링으로, 변수와 mixin을 활용해 효율적으로 CSS를 작성하고 유지 관리할 수 있습니다.',
    color: 'rgb(121, 3, 83)',
    level: 90,
  },
  {
    name: 'tailwind css',
    description:
      'Tailwind CSS 프레임워크를 사용하여 효율적으로 스타일링하며, 유틸리티 클래스를 활용하여 빠르게 반응형 디자인을 구현할 수 있습니다.',
    color: 'rgb(7, 158, 188)',
    level: 90,
  },
  {
    name: 'javascript',
    description:
      'JavaScript ES6 문법을 기반으로 동적인 웹 애플리케이션을 개발하고, 비동기 처리 및 DOM 조작을 할 수 있습니다.',
    color: 'rgb(242, 245, 49)',
    level: 85,
  },
  {
    name: 'react',
    description:
      'React를 사용하여 컴포넌트 기반의 웹 애플리케이션을 구축하고, 상태 관리 및 라이프사이클을 효율적으로 처리할 수 있습니다.',
    color: 'rgb(0, 209, 246)',
    level: 80,
  },
  {
    name: 'react query',
    description:
      'React Query를 활용하여 서버와의 데이터 통신을 관리하고, 캐시와 상태 관리를 통해 성능을 최적화할 수 있습니다.',
    color: 'rgb(0, 209, 246)',
    level: 90,
  },
  {
    name: 'git',
    description:
      'Git을 활용하여 버전 관리를 수행하고, 여러 명과의 협업을 위한 브랜치 관리 및 병합 작업을 원활히 할 수 있습니다.',
    color: 'rgb(244, 79, 79)',
    level: 80,
  },
  {
    name: 'github',
    description: 'GitHub를 사용하여 프로젝트의 소스 코드를 관리하고, 팀원들과 협업할 수 있습니다.',
    color: 'rgb(38, 38, 38)',
    level: 90,
  },
  {
    name: 'netlify',
    description: 'Netlify 플랫폼을 사용하여 웹 애플리케이션을 배포할 수 있습니다.',
    color: 'rgb(97, 239, 232)',
    level: 90,
  },
];

const Skill = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skills = [
    { icon: faHtml5, name: 'html5', color: 'red' },
    { icon: faCss3Alt, name: 'css3', color: 'blue' },
    { icon: faSass, name: 'scss', color: 'rgb(121, 3, 83)' },
    { icon: faFileCode, name: 'tailwind css', color: 'rgb(7, 158, 188)' },
    { icon: faJs, name: 'javascript', color: 'rgb(242, 245, 49)' },
    { icon: faReact, name: 'react', color: 'rgb(0, 209, 246)' },
    { icon: faFileCode, name: 'react query', color: 'rgb(0, 209, 246)' },
    { icon: faSquareGit, name: 'git', color: 'rgb(244, 79, 79)' },
    { icon: faSquareGithub, name: 'github', color: 'rgb(38, 38, 38)' },
    { icon: faDisplay, name: 'netlify', color: 'rgb(97, 239, 232)' },
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
                <FontAwesomeIcon icon={skill.icon} size="4x" color={skill.color} />
                <p>{skill.name}</p>
              </li>
            ))}
          </S.SkillUl>

          {hoveredIndex !== null && (
            <S.ModalContent className="show">
              <h3>{skills[hoveredIndex].name}</h3>
              <p>{skillsDescription[hoveredIndex].description}</p>
              <S.ProgressBar level={skillsDescription[hoveredIndex].level}>
                <div className="bar" />
              </S.ProgressBar>
              <h4>숙련도 {skillsDescription[hoveredIndex].level}%</h4>
            </S.ModalContent>
          )}
        </S.SkillContainer>
      </section>
    </>
  );
};

export default Skill;
