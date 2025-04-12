import * as S from './Portfolio.styles.js';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import yummy from '../assets/images/yummy.png';
import geppetto from '../assets/images/geppetto88.png';
import tiving from '../assets/images/tiving.png';
import jaeflix from '../assets/images/jaeflix.png';
import hm from '../assets/images/h&m.png';
import todolist from '../assets/images/todolist.png';

import prevArrow from '../assets/images/arrow-left.svg';
import nextArrow from '../assets/images/arrow-right.svg';
import { useRef } from 'react';

const portfolioData = [
  {
    title: 'YUMMY',
    image: yummy,
    description: 'React App 그룹 프로젝트',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Redux', 'Netlify'],
    details: `- 현재 위치 기반 디저트 카페를 추천해주는 사이트입니다. <br />
              - 메인페이지의 카드를 클릭하거나 맵에서 카페명을 클릭할 시 이동되는 디테일 페이지를 담당하였습니다. <br />
              - 반응형 웹페이지로 제작하였습니다. <br />
              - Kakao 검색 Open API를 사용하여 검색한 내용의 블로그 리스트가 뜨게 구현하였습니다. <br />
              - react-infinite-scroller 라이브러리를 통해 커서 기반의 무한 스크롤을 구현했고, 마지막 페이지에 닿을 시 마지막 페이지임을 명시했습니다.`,
    link: 'https://yummy-web.netlify.app/',
    github: 'https://github.com/jay0425/react-team11-project',
  },
  {
    title: 'GEPPETTO',
    image: geppetto,
    description: 'React 그룹 프로젝트',
    skills: ['Vite', 'HTML5', 'CSS3', 'TailwindCSS', 'JavaScript', 'React', 'Zustand'],
    details: `- 동물 커뮤니티를 주제로 한 게시판 사이트입니다. <br />
              - 메인 페이지에의 추천 콘텐츠를 swiper로 구현했습니다.<br />
              - 커뮤니티 리스트에서 최신순, 인기순 정렬 기능을 구현했습니다. 인기순은 pocketbase에 저장된 좋아요 개수 기반으로 구현했습니다.<br />
              - 게시판 상세 페이지 UI를 tailwindcss로 구현하였습니다.`,
    link: 'https://geppetto88.netlify.app/',
    github: 'https://github.com/jay0425/DoIt88-PetSite',
  },
  {
    title: 'TIVING',
    image: tiving,
    description: 'SCSS 그룹 프로젝트',
    skills: ['HTML5', 'CSS3', 'SCSS', 'Netlify'],
    details: `- tiving UI를 클론 코딩한 웹페이지 입니다.<br />
              - sass를 사용하여 반응형 웹 UI(모바일, 탭, 데스크탑)를 구현을 하였습니다. <br />
              - 메인페이지 티빙에서 꼭 봐야하는 콘텐츠 UI를 담당했습니다.<br />
              - Quick VOD 섹션 UI를 담당했습니다.<br />
              - 아이디 찾기 페이지 UI를 담당했습니다.`,
    link: 'https://team4-phoenix.netlify.app/',
    github: 'https://github.com/jay0425/phoenix-team4',
  },
  {
    title: 'JAEFLIX',
    image: jaeflix,
    description: 'React App 개인 프로젝트',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'React Query', 'Netlify'],
    details: `- tmdb open api를 사용하여 영화 소개를 하는 react 웹사이트를 구현하였습니다.<br />
              - api를 통해 영화 검색 및 장르 검색 기능 구현을 하였습니다.<br />
              - swiper를 통해 영화 리스트를 나열하였습니다. <br />
              - 페이지네이션을 통해 영화 정렬을 구현했습니다.`,
    link: 'https://tourmaline-faun-f2c3b7.netlify.app/',
    github: 'https://github.com/jay0425/netflix-demo',
  },
  {
    title: 'H&M',
    image: hm,
    description: 'React App 개인 프로젝트',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Redux', 'Netlify'],
    details: `- h&m을 리디자인하여 구현한 패션 사이트 입니다.<br />
              - 반응형 웹페이지로 제작하였습니다. <br />
              - 리액트 라우터로 페이지 전환을 구현했습니다. <br />
              - 리덕스를 통해 유동적인 데이터 사용을 구현했습니다. <br />
              - 검색 기능을 구현했습니다. <br />`,
    link: 'https://yummy-web.netlify.app/',
    github: 'https://github.com/jay0425/react-team11-project',
  },
  {
    title: 'TO DO LIST',
    image: todolist,
    description: 'Vanilla JavaScript App 개인 프로젝트',
    skills: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'Netlify'],
    details: `- 빈칸에 할일을 적고 할일 추가하기 버튼을 클릭하면 할일이 추가되게 구현하였습니다. <br />
              - 완료된 할일은 체크 표시를 할 수 있고 따로 완료된 탭에서 모아 볼 수 있게 구현하였습니다. <br />
              - 할일을 삭제할 수 있게 구현하였습니다. <br />`,
    link: 'https://funny-crisp-ba874c.netlify.app/',
    github: 'https://github.com/jay0425/ToDoList',
  },
];

const Portfolio = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <section id="portfolio">
        <h2>PORTFOLIO</h2>

        <S.CustomSwiperButtonPrev ref={prevRef}>
          <img src={prevArrow} alt="Previous" />
        </S.CustomSwiperButtonPrev>
        <S.CustomSwiperButtonNext ref={nextRef}>
          <img src={nextArrow} alt="Next" />
        </S.CustomSwiperButtonNext>

        <div className="container">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {portfolioData.map((item, index) => (
              <SwiperSlide key={index}>
                <S.ContainerContent>
                  <S.Box>
                    <S.Front>
                      <h4>{item.title}</h4>
                      <img src={item.image} alt={`${item.title} 프로젝트 이미지`} />
                    </S.Front>
                    <S.Back>
                      <S.BackWrapper>
                        <S.BackTitles>
                          <h4>{item.title}</h4>
                          <h6>{item.description}</h6>
                        </S.BackTitles>
                        <S.BackHr />
                        <ul>
                          {item.skills.map((skill, idx) => (
                            <li key={idx}>{skill}</li>
                          ))}
                        </ul>
                        <p dangerouslySetInnerHTML={{ __html: item.details }}></p>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <span>LINK</span>
                        </a>
                        <a href={item.github} target="_blank" rel="noopener noreferrer">
                          <span>GITHUB</span>
                        </a>
                      </S.BackWrapper>
                    </S.Back>
                  </S.Box>
                </S.ContainerContent>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
