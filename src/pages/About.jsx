import styled from "styled-components";

import Header from "../components/Layout/Header";
import Layout from "../components/Layout/Layout";
import React, { useState } from "react";
import Footer from "../components/Layout/Footer";

function About() {
  const [change, setChange] = useState(true);
  return (
    <>
      <Header />
      <Titlesection>
        <h2>
          안녕하세요 김진영입니다.
          <br />
          여기서는 이 사이트의 제작 목적을 말씀드리고자 합니다.
        </h2>
      </Titlesection>
      {change === true ? (
        <Textsection>
          <Layout>
            <div>
              <h2>들어가는 말</h2>
              <p>
                이전에도 html과 제이쿼리로 만든 적이 있었습니다.
                <p>
                  하지만 리액트로 조금 더 나은 디자인으로 다시 리뉴얼해보고
                  싶었습니다.
                </p>
                <p>
                  그래서 이 사이트를 처음부터 차근차근 리뉴얼 다시
                  재디자인했습니다.
                </p>
              </p>
              <button
                onClick={() => {
                  setChange(false);
                }}
              >
                클릭해보기
              </button>
            </div>
          </Layout>
        </Textsection>
      ) : (
        <Textsection>
          <Layout>
            <div>
              <h2>들어가는 말</h2>
              <p>
                이전에도 html과 제이쿼리로 만든 적이 있었습니다.
                <p>
                  하지만 리액트로 조금 더 나은 디자인으로 다시 리뉴얼해보고
                  싶었습니다.
                </p>
                <p>
                  그래서 이 사이트를 처음부터 차근차근 리뉴얼 다시
                  재디자인했습니다.
                </p>
              </p>
            </div>
            <div>
              <img src={`${process.env.PUBLIC_URL}/images/gaide.png`} />
              <button
                className="MyBtn2"
                onClick={() => {
                  setChange(true);
                }}
              >
                숨기기
              </button>
            </div>
          </Layout>
          <Footer />
        </Textsection>
      )}
    </>
  );
}

const Titlesection = styled.section`
  position: relative;
  width: 100%;
  height: 460px;
  background-color: #f4ec90;
  border-bottom: 1px solid black;
  h2 {
    position: absolute;
    text-align: center;
    margin: 0;
    top: 35%;
    left: 28%;
    transform: translate(-50% -50%);
    font-size: 28px;
  }
`;

const Textsection = styled.section`
  height: 50vh;
  padding-top: 50px;
  div {
    position: relative;
    h2 {
      text-align: center;
      font-size: 40px;
    }
    p {
      text-align: center;
      font-size: 18px;
      margin: 10px;
    }
    button {
      display: block;
      position: absolute;
      width: 190px;
      height: 50px;
      background-color: #f1f9b0;
      border: none;
      cursor: pointer;
      left: 42%;
      bottom: -50%;
      :hover {
        background-color: #c7d07a;
      }
    }
    .MyBtn2 {
      display: block;
      position: absolute;
      width: 190px;
      height: 50px;
      background-color: #f1f9b0;
      border: none;
      cursor: pointer;
      left: 42%;
      bottom: 2%;
      :hover {
        background-color: #c7d07a;
      }
    }
  }
`;

export default About;
