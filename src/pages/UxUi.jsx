import styled from "styled-components";
import Header from "../components/Layout/Header";
import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function UxUi() {
  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };
  return (
    <>
      <Header />
      <Titlesection>
        <h2>
          이 페이지는 저의 UI/UX의
          <br />
          작업물들을 모아놓은 페이지 입니다
        </h2>
      </Titlesection>
      <Layout>
        <UxUiSetion>
          <h1 className="title">UX/UI 철학</h1>
          <article className="UxUi1">
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/mokup1.png`}
                alt="목업1"
              />
            </div>
            <div className="UxUitext">
              <p>
                부족함을 채워 나가는 노력
                <br />
                노력의 결실을 믿습니다
              </p>
              <p className="span">
                *왼쪽 사진은 자체 기획한 문구류 브랜드 펜스팅 목업입니다
              </p>
              <p>
                <span className="span">사이트 주소</span>:
                https://kimjin2.github.io/pensting2/#
              </p>
            </div>
          </article>
          <article className="UxUi2">
            <div className="UxUitext">
              <p>
                프로덕트가 집중될 수 있도록 <br />
                디자인을 신경 쓰겠습니다
              </p>
              <p className="span">
                *오른쪽 사진은 할리스 커피를 리뉴얼한 사진입니다.
              </p>
              <p>
                <span className="span">사이트 주소</span>:
                https://kimjin2.github.io/hollys/
              </p>
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/mokup2.png`}
                alt="목업1"
              />
            </div>
          </article>
        </UxUiSetion>
        <h1> 그래픽 작업물 </h1>
        <SlideSection {...settings}>
          <div className="imgBox">
            <img
              src={`${process.env.PUBLIC_URL}/images/banner1.png`}
              alt="배너1"
            />
          </div>
          <div className="imgBox2">
            <img
              src={`${process.env.PUBLIC_URL}/images/banner2.png`}
              alt="배너2"
            />
          </div>
          <div className="imgBox">
            <img
              src={`${process.env.PUBLIC_URL}/images/banner3.png`}
              alt="배너3"
            />
          </div>
          <div className="imgBox">
            <img
              src={`${process.env.PUBLIC_URL}/images/banner4.png`}
              alt="배너4"
            />
          </div>
          <div className="imgBox">
            <img
              src={`${process.env.PUBLIC_URL}/images/banner5.png`}
              alt="배너5"
            />
          </div>
          <div className="imgBox">
            <img
              src={`${process.env.PUBLIC_URL}/images/banner6.png`}
              alt="배너6"
            />
          </div>
          <div className="imgBox">
            <img
              src={`${process.env.PUBLIC_URL}/images/banner7.png`}
              alt="배너7"
            />
          </div>
          <div className="imgBox2">
            <img
              src={`${process.env.PUBLIC_URL}/images/banner8.png`}
              alt="배너8"
            />
          </div>
          <div className="imgBox2">
            <img
              src={`${process.env.PUBLIC_URL}/images/banner9.png`}
              alt="배너8"
            />
          </div>
        </SlideSection>
      </Layout>
      <Footer />
    </>
  );
}

const Titlesection = styled.section`
  position: relative;
  width: 100%;
  height: 460px;
  background-color: #b7edf9;
  border-bottom: 1px solid black;
  h2 {
    position: absolute;
    text-align: center;
    margin: 0;
    top: 35%;
    left: 35%;
    transform: translate(-50% -50%);
    font-size: 28px;
  }
`;

const UxUiSetion = styled.section`
  margin-top: 5%;
  .title {
    font-size: 21px;
  }
  .UxUi1 {
    display: flex;

    div {
      width: calc(100% - 50%);
      :nth-child(2) {
        border-top: 1px solid black;
      }
      img {
        width: 100%;
      }
    }
  }
  .UxUitext {
    padding: 10% 10%;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    .span {
      display: block;
      width: 500px;
      font-size: 16px;
      font-weight: bold;
    }
  }
  .UxUi2 {
    display: flex;
    margin-bottom: 5%;
    .UxUitext {
      padding: 10% 10%;
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      .span {
        display: block;
        width: 500px;
        font-size: 16px;
        font-weight: bold;
      }
    }
    div {
      width: calc(100% - 50%);
      :nth-child(1) {
        border-bottom: 1px solid black;
      }
      img {
        width: 100%;
      }
    }
  }
`;

const SlideSection = styled(Slider)`
  display: block;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 100%;
  .imgBox {
    width: 1000px;
    height: 700px;
    padding: 5% 10% 5% 10%;
    box-sizing: border-box;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .imgBox2 {
    width: 500px;
    height: 1000px;
    padding: 0% 10% 0% 10%;
    box-sizing: border-box;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default UxUi;
