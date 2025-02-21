import './App.css';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Keyboard, A11y } from 'swiper/modules';

import styled from 'styled-components';

import GlobalStyle from './styles/GlobalStyles.js';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';

import Header from './components/Header.presenter.jsx';

import Intro from './pages/Intro.presenter.jsx';
import Skill from './pages/Skill.presenter.jsx';
import Portfolio from './pages/Portfolio.presenter.jsx';
import AboutMe from './pages/AboutMe.presenter.jsx';

function App() {
  const [pageNum, setPageNum] = useState(0);
  const swiperRef = useRef(null);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header swiperRef={swiperRef} pageNum={pageNum} />
        <StyledSwiper
          ref={swiperRef}
          direction={'vertical'}
          slidesPerView={1}
          modules={[Mousewheel, Pagination, Keyboard, A11y]}
          mousewheel={true}
          keyboard={{ enabled: true }}
          speed={600}
          pagination={{ clickable: true }}
          onSlideChange={(e) => {
            setPageNum(e.activeIndex);
          }}
        >
          <StyledSwiperSlide>
            <Intro />
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <Skill />
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <Portfolio />
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <AboutMe />
          </StyledSwiperSlide>
        </StyledSwiper>
      </div>
    </>
  );
}

export default App;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100vh;
  /* height: 100dvh; */

  .swiper-pagination {
    .swiper-pagination-bullet {
      background: var(--swiper-pagination-bullet-inactive-color, var(--sub-blue));
    }
    .swiper-pagination-bullet-active {
      background: var(--swiper-pagination-bullet-inactive-color, var(--main-blue));
      opacity: 0.6;
    }
  }
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  box-sizing: border-box;
  width: 100%;
  padding: 0 10rem;
`;
