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
    overview: '현재 위치 기반 디저트 카페를 추천해주는 사이트입니다.',
    details: `
                  - 메인페이지의 추천 카페 카드 클릭 또는 지도상의 마커 클릭 시 디테일 페이지로 이동하는 기능을 구현하였습니다.<br />
                  - 디테일 페이지에서는 선택한 카페의 정보와 함께 관련 블로그 글을 확인할 수 있도록 Kakao 검색 Open API를 활용하여 데이터를 불러왔습니다.<br />
                  - 블로그 결과는 부드러운 흐름과 데이터 요청 최적화를 위해 react-infinite-scroller 라이브러리를 사용해 커서 기반의 무한 스크롤 방식으로 구현하였으며 마지막 페이지 도달 시 안내 메시지를 노출시켰습니다.<br />
                  - 디테일 페이지 UI를 반응형으로 제작하여 데스크탑과 모바일 디스플레이에서도 최적화된 사용자 경험을 제공했습니다.<br />`,
    comment: '현재 토큰 만료로 인하여 해당 웹사이트를 확인할 수 없게 되었습니다.',
    link: 'https://yummy-web.netlify.app/',
    github: 'https://github.com/jay0425/react-team11-project',
  },
  {
    title: 'GEPPETTO',
    image: geppetto,
    description: 'React 그룹 프로젝트',
    skills: ['Vite', 'HTML5', 'CSS3', 'TailwindCSS', 'JavaScript', 'React', 'Zustand', 'Pocketbase'],
    overview: '사용자들 간에 동물 관련 정보 및 게시물을 공유할 수 있는 플랫폼으로서 구현한 게시판 사이트입니다. ',
    details: `
              - 메인 페이지 : 추천 콘텐츠는 사용자가 쉽게 콘텐츠를 탐색할 수 있도록 Swiper를 이용하여 슬라이드형 UI로 구현하였습니다. <br /><br />
              - 커뮤니티 리스트 페이지 : 사용자 경험과 참여 유도를 향상시킬 수 있도록 게시글을 최신순, 인기순으로 정렬할 수 있는 기능을 추가했습니다. 인기순 정렬은 Pocketbase에 저장된 각 게시글의 좋아요 개수를 기준으로 구현하였으며 이를 통해 사용자는 최신 게시글뿐만 아니라 인기 있는 게시글도 쉽게 찾을 수 있습니다.<br /><br />
              - 게시판 상세 페이지 UI : 클래스 단위로 스타일을 적용하여 유지보수가 용이한 TailwindCSS를 사용하여 페이지 디자인을 구성하였습니다.`,
    link: 'https://geppetto88.netlify.app/',
    github: 'https://github.com/jay0425/DoIt88-PetSite',
  },
  {
    title: 'TIVING',
    image: tiving,
    description: 'SCSS 그룹 프로젝트',
    skills: ['HTML5', 'CSS3', 'SCSS', 'Netlify'],
    overview: 'tiving UI를 클론 코딩한 웹페이지 입니다.',
    details: `
              - 반응형 웹 디자인 구현 : CSS를 보다 효율적이고 구조화된 방식으로 작성할 수 있도록 SCSS를 사용하여 모바일, 태블릿, 데스크탑 환경에 맞춘 반응형 레이아웃을 구현했습니다. <br /><br />
              - 메인 페이지 UI에서 티빙에서 꼭 봐야하는 콘텐츠 UI를 담당했습니다. <br />
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
    overview: '영화 소개를 하는 react 웹사이트입니다.',
    details: `
              - TMDB(Open Movie Database) API를 사용하여 영화 데이터를 동적으로 받아와 최신 영화, 인기 영화, 장르별 영화 정보를 제공합니다. API 호출 시 React Query를 활용하여 데이터의 캐싱 및 상태 관리를 효율적으로 처리하였습니다. <br />
              - 사용자가 원하는 영화를 검색할 수 있도록 영화 검색 기능을 구현하였으며 장르별로 영화 리스트를 필터링 할 수 있는 기능도 제공하였습니다. <br />
              - 영화 리스트를 swiper 컴포넌트를 활용하여 슬라이드 형식으로 구현하여 직관적인 인터페이스를 제공하고 사용자 경험을 향상시켰습니다.  <br />
              - 페이지네이션 기능을 구현하여 대규모 영화 데이터를 페이징 처리하여 성능을 최적화하고 사용자가 필요한 정보를 쉽게 찾을 수 있도록 했습니다. 페이지 전환 시 로딩 화면을 보여줌으로써 부드러운 UI 전환을 제공하여 사용자 경험을 개선했습니다.
              `,
    link: 'https://tourmaline-faun-f2c3b7.netlify.app/',
    github: 'https://github.com/jay0425/netflix-demo',
  },
  {
    title: 'H&M',
    image: hm,
    description: 'React App 개인 프로젝트',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Redux', 'Netlify'],
    overview: 'h&m을 리디자인하여 구현한 패션 사이트 입니다.',
    details: `
              - 반응형 웹사이트로 제작하여 모바일, 데스크탑 같이 다양한 화면 크기에서 최적화된 UI/UX를 제공합니다. <br />
              - React Router를 사용하여 페이지 전환을 구현하였습니다. 동적 라우팅을 통해 각 카테고리와 제품 상세 페이지로 원활하게 이동할 수 있도록 했습니다.<br />
              - 리덕스를 통해 유동적인 데이터 사용을 구현했습니다. <br />
              - 검색 기능을 구현하여 사용자가 원하는 상품을 쉽게 찾을 수 있도록 했습니다. 입력된 검색어에 맞춰 실시간으로 결과를 표시하여 사용자 편의성을 높였습니다. <br />`,
    link: 'https://eclectic-paprenjak-1ba1c7.netlify.app/',
    github: 'https://github.com/jay0425/hnm-react-router-practice?tab=readme-ov-file',
  },
  {
    title: 'TO DO LIST',
    image: todolist,
    description: 'Vanilla JavaScript App 개인 프로젝트',
    skills: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'Netlify'],
    overview: '할일을 적는 투두리스트입니다.',
    details: `- 빈 칸에 할 일을 입력하고 '할일 추가하기' 버튼을 클릭하면 할 일이 목록에 추가되도록 구현하였습니다. 입력값에 대한 유효성 검사를 추가하여 입력 없이 추가를 할 수 없게 하였고 사용자가 알기 쉽게 오류 메시지를 제공하였습니다.<br />
              - 완료된 할일은 체크박스를 사용하여 할일의 상태를 변경할 수 있습니다. 체크된 할일은 별도의 '완료된 할일' 탭에 분류하여 관리할 수 있도록 했으며, 상태 변화에 따라 UI가 동적으로 업데이트되도록 구현하였습니다. <br />
              - 할일 삭제 기능을 추가하여 사용자가 원하지 않는 할일을 목록에서 삭제할 수 있도록 했습니다. 삭제된 할일은 실시간으로 제거되도록 처리하여 바로 UI에 반영되도록 했습니다. <br />
              - 효율적인 CSS 작성을 위해 SCSS의 중첩 개념을 사용하여 UI 구현을 했습니다. <br />
              `,
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
              1024: { slidesPerView: 3 },
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
                        <S.CardContent>
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
                          <S.Overview>{item.overview}</S.Overview>
                          <S.Details dangerouslySetInnerHTML={{ __html: item.details }}></S.Details>
                          <S.Comment>{item?.comment}</S.Comment>
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <span>LINK</span>
                          </a>
                          <a href={item.github} target="_blank" rel="noopener noreferrer">
                            <span>GITHUB</span>
                          </a>
                        </S.CardContent>
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
