import * as S from './Intro.styles.js';
import photo from '../assets/images/photo.jpeg';

const Intro = () => {
  return (
    <>
      <S.Intro id="intro">
        <h2>INTRO</h2>
        <div className="container">
          <S.IntroWrapper>
            <img src={photo} alt="프로필 이미지" />

            <h3>
              <span id="intro-first-div">
                <strong>새로운 도전</strong>을 좋아하는 프론트엔드 개발 지망생 김재희 입니다.
              </span>
              <br />
              <span>
                에러나 버그가 발생하여 안되는 것은 끝까지 노력하여 결국 해결해내고 마는<strong> 끈기</strong>를 가졌으며
              </span>

              <br />
              <span>
                경청하는 자세로 다양한 분들과의 원활한 <strong>커뮤니케이션</strong>을 지향합니다.
              </span>
            </h3>
          </S.IntroWrapper>
        </div>
      </S.Intro>
    </>
  );
};

export default Intro;
