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

const Skill = () => {
  return (
    <>
      <section id="skill">
        <h2>SKILL</h2>
        <S.SkillUl>
          <li>
            <FontAwesomeIcon icon={faHtml5} size="3x" color="red" />
            <p>html5</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faCss3Alt} size="3x" color="blue" />
            <p>css3</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faSass} size="3x" color="rgb(121, 3, 83)" />
            <p>scss</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faFileCode} size="3x" color="rgb(7, 158, 188)" />
            <p>tailwind css</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faJs} size="3x" color="rgb(242, 245, 49)" />
            <p>javascript</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faReact} size="3x" color="rgb(0, 209, 246)" />
            <p>react</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faFileCode} size="3x" />
            <p>react query</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faSquareGit} size="3x" color="rgb(244, 79, 79)" />
            <p>git</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faSquareGithub} size="3x" />
            <p>github</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faDisplay} size="3x" color="rgb(97, 239, 232)" />
            <p>netlify</p>
          </li>
        </S.SkillUl>
      </section>
    </>
  );
};

export default Skill;
