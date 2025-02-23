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
    contribution: 16,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Redux', 'Netlify'],
    details: '- 현재 위치 기반 디저트 카페를 추천해주는 사이트입니다.',
    link: 'https://yummy-web.netlify.app/',
    github: 'https://github.com/jay0425/react-team11-project',
  },
  {
    title: 'GEPPETTO',
    image: geppetto,
    description: 'React 그룹 프로젝트',
    contribution: 25,
    skills: ['Vite', 'HTML5', 'CSS3', 'TailwindCSS', 'JavaScript', 'React', 'Zustand'],
    details: '- 동물 커뮤니티를 주제로 한 게시판 사이트입니다.',
    link: 'https://geppetto88.netlify.app/',
    github: 'https://github.com/jay0425/DoIt88-PetSite',
  },
  {
    title: 'TIVING',
    image: tiving,
    description: 'SCSS 그룹 프로젝트',
    contribution: 25,
    skills: ['HTML5', 'CSS3', 'SCSS', 'Netlify'],
    details: '- Tiving UI를 클론 코딩한 웹페이지입니다.',
    link: 'https://team4-phoenix.netlify.app/',
    github: 'https://github.com/jay0425/phoenix-team4',
  },
  {
    title: 'JAEFLIX',
    image: jaeflix,
    description: 'React App 개인 프로젝트',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'React Query', 'Netlify'],
    details: '- TMDB Open API를 사용하여 영화 소개 React 웹사이트를 구현하였습니다.',
    link: 'https://tourmaline-faun-f2c3b7.netlify.app/',
    github: 'https://github.com/jay0425/netflix-demo',
  },
  {
    title: 'H&M',
    image: hm,
    description: 'React App 개인 프로젝트',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Redux', 'Netlify'],
    details: '- H&M을 리디자인하여 구현한 패션 사이트입니다.',
    link: 'https://yummy-web.netlify.app/',
    github: 'https://github.com/jay0425/react-team11-project',
  },
  {
    title: 'TO DO LIST',
    image: todolist,
    description: 'Vanilla JavaScript App 개인 프로젝트',
    skills: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'Netlify'],
    details: '- 간단한 할일 추가/삭제 기능이 포함된 To-Do List 앱입니다.',
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
            onInit={(swiper) => {
              console.log('Swiper 초기화됨!', swiper);
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
                          {item.contribution && <h6>기여도 {item.contribution}%</h6>}
                        </S.BackTitles>
                        <S.BackHr />
                        <ul>
                          {item.skills.map((skill, idx) => (
                            <li key={idx}>{skill}</li>
                          ))}
                        </ul>
                        <p>{item.details}</p>
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
