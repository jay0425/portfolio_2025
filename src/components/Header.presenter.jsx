import * as S from './Header.styles.js';

const Header = () => {
  return (
    <>
      <S.Header>
        <S.Logo>
          <a href="#intro">JAEHEE</a>
        </S.Logo>
        <S.Nav id="logo-nav">
          <h3>
            <a href="#intro">Intro</a>
          </h3>
          <h3>
            <a href="#skill">Skill</a>
          </h3>
          <h3>
            <a href="#portfolio">Portfolio</a>
          </h3>
          <h3>
            <a href="#about-me">AboutMe</a>
          </h3>
        </S.Nav>
      </S.Header>
    </>
  );
};

export default Header;
