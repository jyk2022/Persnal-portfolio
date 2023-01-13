import styled from "styled-components";
import Header from "../components/Layout/Header";
import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer";

function Web() {
  return (
    <>
      <Header />
      <Titlesection>
        <h2>
          이 페이지는 저의 기초적인
          <br />
          react 개발물을 작업물을 모아놓았습니다.
        </h2>
      </Titlesection>
      <Layout>
        <WebSetion>
          <h1 className="title">웹 개발</h1>
          <article className="web1">
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/web1.png`}
                alt="웹1"
              />
            </div>
            <div className="webtext">
              <p>프로젝트명: 놀이기구 추천사이트</p>
              <p>제작기간: 2022.11.14 ~ 2022.11.18</p>
              <p>참여인원: 4명</p>
              <p>
                제작내용: 와이어프레임(기여도25%), 게시글 등록 및
                삭제(기여도100%), 댓글 등록 및 삭제
              </p>
              <p>제작스킬: 피그마, html, 제이쿼리, 파이썬, 몽고db</p>
            </div>
          </article>
          <article className="web2">
            <div className="webtext">
              <p>프로젝트명: 프로젝트명: 놀이기구 추천사이트</p>
              <p>제작기간: 2022.11.14 ~ 2022.11.18</p>
              <p>참여인원: 4명</p>
              <p>
                제작내용: 와이어프레임(기여도25%), 게시글 등록 및
                삭제(기여도100%), 댓글 등록 및 삭제
              </p>
              <p>제작스킬: 피그마, html, 제이쿼리, 파이썬, 몽고db</p>
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/web2.png`}
                alt="웹1"
              />
            </div>
          </article>
          <article className="web3">
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/web3.png`}
                alt="웹1"
              />
            </div>
            <div className="webtext">
              <p>프로젝트명: 성형외과 사이트 (항해언니)</p>
              <p>제작기간: 2022년 12월 16일 ~ 2022년 12월 22일</p>
              <p>참여인원: FE:3명 BE:3명</p>
              <p>
                제작내용: 와이어프레임(기여도30%), 홈페이지 및 게시글 CRUD
                기능(기여도80%) 댓글 CRUD기능 전반(기여도25%), 로그인 회원가입
                및 회원가입 중복확인
              </p>
              <p>
                제작스킬: 제작스킬: 피그마, 리액트(자바스크립트), CSS,
                스타일드컴포넌트, 리액트툴킷, aioxs
              </p>
            </div>
          </article>
        </WebSetion>
      </Layout>
      <Footer />
    </>
  );
}

const Titlesection = styled.section`
  position: relative;
  width: 100%;
  height: 460px;
  background-color: #5fc883;
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

const WebSetion = styled.section`
  margin-top: 5%;
  .title {
    font-size: 21px;
  }
  .web1 {
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
  .webtext {
    padding: 5% 5%;
    text-align: left;
    font-size: 18px;
    font-weight: 400;
    .span {
      display: block;
      width: 500px;
      font-size: 16px;
      font-weight: bold;
    }
  }
  .web2 {
    display: flex;
    .webtext {
      padding: 5% 5%;
      text-align: left;
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
      img {
        width: 100%;
      }
    }
  }
  .web3 {
    display: flex;
    .webtext {
      padding: 5% 5%;
      text-align: left;
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
      :nth-child(2) {
        border-bottom: 1px solid black;
      }
      img {
        width: 100%;
      }
    }
  }
`;

export default Web;
