import { useState } from 'react';
import * as S from './Header.styles';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <S.Header>
      <S.Logo>
        <a href="#intro">JAEHEE</a>
      </S.Logo>

      <S.MenuButton onClick={toggleMenu} open={menuOpen}>
        <span />
        <span />
        <span />
      </S.MenuButton>

      <S.DesktopNav>
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
      </S.DesktopNav>

      <S.MobileNav open={menuOpen}>
        <h3>
          <a href="#intro" onClick={toggleMenu}>
            Intro
          </a>
        </h3>
        <h3>
          <a href="#skill" onClick={toggleMenu}>
            Skill
          </a>
        </h3>
        <h3>
          <a href="#portfolio" onClick={toggleMenu}>
            Portfolio
          </a>
        </h3>
        <h3>
          <a href="#about-me" onClick={toggleMenu}>
            AboutMe
          </a>
        </h3>
      </S.MobileNav>
    </S.Header>
  );
};

export default Header;
