const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <h2>PORTFOLIO</h2>
        <ul class="portfolio-contents">
          <li class="content container">
            <div class="box">
              <div class="front">
                <h4>YUMMY</h4>
                <img src="assets/images/yummy.png" alt="yummy 프로젝트 이미지" />
              </div>
              <div class="back">
                <div class="back-wrapper">
                  <div class="back-titles">
                    <h4>YUMMY</h4>
                    <h6>react app 그룹 프로젝트</h6>
                    <h6>기여도 16%</h6>
                  </div>
                  <hr class="back-hr" />
                  <ul>
                    <li>html5</li>
                    <li>css3</li>
                    <li>javascript</li>
                  </ul>
                  <ul>
                    <li>react</li>
                    <li>redux</li>
                    <li>netlify</li>
                  </ul>
                  <p>
                    - 현재 위치 기반 디저트 카페를 추천해주는 사이트입니다. <br />
                    - 메인페이지의 카드를 클릭하거나 맵에서 카페명을 클릭할 시 이동되는 디테일 페이지를 담당하였습니다.
                    <br />
                    - 반응형 웹페이지로 제작하였습니다 <br />
                    - kakao 검색 open api를 사용하여 검색한 내용의 블로그 리스트가 뜨게 구현하였습니다. <br />-
                    react-infinite-scroller 라이브러리를 통해 커서 기반의 무한 스크롤을 구현했고 마지막 페이지에 닿을 시
                    마지막 페이지 임을 명시했습니다.
                  </p>
                  <a href="https://yummy-web.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <span>LINK</span>
                  </a>
                  <a href="https://github.com/jay0425/react-team11-project" target="_blank" rel="noopener noreferrer">
                    <span>GIT HUB</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li class="content container geppetto">
            <div class="box">
              <div class="front">
                <h4>GEPPETTO</h4>
                <img src="assets/images/geppetto88.png" alt="geppetto 프로젝트 이미지" />
              </div>
              <div class="back">
                <div class="back-wrapper">
                  <div class="back-titles">
                    <h4>GEPPETTO</h4>
                    <h6>react 그룹프로젝트</h6>
                    <h6>기여도 25%</h6>
                  </div>
                  <hr class="back-hr" />
                  <ul>
                    <li>vite</li>
                    <li>html5</li>
                    <li>css3</li>
                    <li>tailwindcss</li>
                  </ul>
                  <ul>
                    <li>javascript</li>
                    <li>react</li>
                    <li>zustand</li>
                  </ul>
                  <ul>
                    <li>pocketbase</li>
                    <li>reactrouter</li>
                    <li>netlify</li>
                  </ul>
                  <p>
                    - 동물 커뮤니티를 주제로 한 게시판 사이트입니다. <br />
                    - 메인 페이지에의 추천 콘텐츠를 swiper로 구현했습니다.
                    <br />
                    - 커뮤니티 리스트에서 최신순, 인기순 정렬 기능을 구현했습니다. 인기순은 pocketbase에 저장된 좋아요
                    개수 기반으로 구현했습니다.
                    <br />- 게시판 상세 페이지 UI를 tailwindcss로 구현하였습니다.
                  </p>
                  <a href="https://geppetto88.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <span>LINK</span>
                  </a>
                  <a
                    href="https://github.com/jay0425/DoIt88-PetSite?tab=readme-ov-file"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>GIT HUB</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li class="swiper-slide container">
            <div class="box">
              <div class="front">
                <h4>TIVING</h4>
                <img src="assets/images/tiving.png" alt="tiving 프로젝트 이미지" />
              </div>
              <div class="back">
                <div class="back-wrapper">
                  <div class="back-titles">
                    <h4>TIVING</h4>
                    <h6>scss 그룹 프로젝트</h6>
                    <h6>기여도 25%</h6>
                  </div>
                  <hr class="back-hr" />
                  <ul>
                    <li>html5</li>
                    <li>css3</li>
                    <li>scss</li>
                    <li>netlify</li>
                  </ul>
                  <p>
                    - tiving UI를 클론 코딩한 웹페이지 입니다.
                    <br />
                    - sass를 사용하여 반응형 웹 UI(모바일, 탭, 데스크탑)를 구현을 하였습니다. <br />
                    - 메인페이지 티빙에서 꼭 봐야하는 콘텐츠 UI를 담당했습니다.
                    <br />
                    - Quick VOD 섹션 UI를 담당했습니다.
                    <br />- 아이디 찾기 페이지 UI를 담당했습니다.
                  </p>
                  <a href="https://team4-phoenix.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <span>LINK</span>
                  </a>
                  <a
                    href="https://github.com/jay0425/phoenix-team4?tab=readme-ov-file"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>GIT HUB</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li class="swiper-slide container">
            <div class="box">
              <div class="front">
                <h4>JAEFLIX</h4>
                <img src="assets/images/jaeflix.png" alt="jaeflix 프로젝트 이미지" />
              </div>
              <div class="back">
                <div class="back-wrapper">
                  <div class="back-titles">
                    <h4>JAEFLIX</h4>
                    <h6>react app 개인 프로젝트</h6>
                  </div>
                  <hr class="back-hr" />
                  <ul>
                    <li>html5</li>
                    <li>css3</li>
                    <li>javascript</li>
                  </ul>
                  <ul>
                    <li>react</li>
                    <li>react query</li>
                    <li>netlify</li>
                  </ul>
                  <p>
                    - tmdb open api를 사용하여 영화 소개를 하는 react 웹사이트를 구현하였습니다.
                    <br />
                    - api를 통해 영화 검색 및 장르 검색 기능 구현을 하였습니다.
                    <br />
                    - swiper를 통해 영화 리스트를 나열하였습니다. <br />- 페이지네이션을 통해 영화 정렬을 구현했습니다.
                  </p>
                  <a href="https://tourmaline-faun-f2c3b7.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <span>LINK</span>
                  </a>
                  <a href="https://github.com/jay0425/netflix-demo" target="_blank" rel="noopener noreferrer">
                    <span>GIT HUB</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li class="swiper-slide container">
            <div class="box">
              <div class="front">
                <h4>H&M</h4>
                <img src="assets/images/h&m.png" alt="h&m 프로젝트 이미지" />
              </div>
              <div class="back">
                <div class="back-wrapper">
                  <div class="back-titles">
                    <h4>H&M</h4>
                    <h6>react app 개인 프로젝트</h6>
                  </div>
                  <hr class="back-hr" />
                  <ul>
                    <li>html5</li>
                    <li>css3</li>
                    <li>javascript</li>
                  </ul>
                  <ul>
                    <li>react</li>
                    <li>redux</li>
                    <li>netlify</li>
                  </ul>
                  <p>
                    - h&m을 리디자인하여 구현한 패션 사이트 입니다.
                    <br />
                    - 반응형 웹페이지로 제작하였습니다. <br />
                    - 리액트 라우터로 페이지 전환을 구현했습니다. <br />
                    - 리덕스를 통해 유동적인 데이터 사용을 구현했습니다. <br />
                    - 검색 기능을 구현했습니다. <br />
                  </p>
                  <a href="https://yummy-web.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <span>LINK</span>
                  </a>
                  <a href="https://github.com/jay0425/react-team11-project" target="_blank" rel="noopener noreferrer">
                    <span>GIT HUB</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li class="swiper-slide container">
            <div class="box">
              <div class="front">
                <h4>TO DO LIST</h4>
                <img src="assets/images/todolist.png" alt="todolist 프로젝트 이미지" />
              </div>
              <div class="back">
                <div class="back-wrapper">
                  <div class="back-titles">
                    <h4>TO DO LIST</h4>
                    <h6>
                      vanilla javascript app <br />
                      개인 프로젝트
                    </h6>
                  </div>
                  <hr class="back-hr" />
                  <ul>
                    <li>html5</li>
                    <li>css3</li>
                    <li>scss</li>
                  </ul>
                  <ul>
                    <li>javascript</li>
                    <li>netlify</li>
                  </ul>
                  <p>
                    - 빈칸에 할일을 적고 할일 추가하기 버튼을 클릭하면 할일이 추가되게 구현하였습니다. <br />
                    - 완료된 할일은 체크 표시를 할 수 있고 따로 완료된 탭에서 모아 볼 수 있게 구현하였습니다. <br />
                    - 할일을 삭제할 수 있게 구현하였습니다. <br />
                  </p>
                  <a href="https://funny-crisp-ba874c.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <span>LINK</span>
                  </a>
                  <a
                    href="https://github.com/jay0425/ToDoList?tab=readme-ov-file"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>GIT HUB</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Portfolio;
