import styled from 'styled-components';
import Header from '../components/Layout/Header';
import Layout from '../components/Layout/Layout';
import Footer from '../components/Layout/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
                        <div className="UxUiImg">
                            <img src={`${process.env.PUBLIC_URL}/images/mokup1.png`} alt="목업1" />
                        </div>
                        <div className="UxUitext">
                            <p>
                                부족함을 채워 나가는 노력
                                <br />
                                노력의 결실을 믿습니다
                            </p>
                            <p className="span">*왼쪽 사진은 자체 기획한 문구류 브랜드 펜스팅 목업입니다</p>
                            <p className="span">
                                <a href="https://kimjin2.github.io/pensting2/# ">사이트 보기</a>
                                <a href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a7f2b958-4a05-47e8-a6b5-35102de5fd71/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230323T114533Z&X-Amz-Expires=86400&X-Amz-Signature=11a3bbb9d078fd90ab4055353e4669c0eb4b922ca14d750a2374b4ea5be66fbb&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject">
                                    브랜드 기획 내용
                                </a>
                            </p>
                        </div>
                    </article>
                    <article className="UxUi2">
                        <div className="UxUitext">
                            <p>
                                프로덕트가 집중될 수 있도록 <br />
                                디자인을 신경 쓰겠습니다
                            </p>
                            <p className="span">*오른쪽 사진은 할리스 커피를 리뉴얼한 사진입니다.</p>
                            <p className="span">
                                <a href="https://kimjin2.github.io/hollys/ ">사이트 보기</a>
                                <a href="https://jykthink.notion.site/49817d9c700446ca9bc4b1d0af24d040 ">디자인 소개</a>
                            </p>
                        </div>
                        <div className="UxUiImg">
                            <img src={`${process.env.PUBLIC_URL}/images/mokup2.png`} alt="목업1" />
                        </div>
                    </article>
                    <article className="UxUi1">
                        <div className="UxUiImg">
                            <img src={`${process.env.PUBLIC_URL}/images/roopTopCat.jpg`} alt="옥냥이 월드" />
                        </div>
                        <div className="UxUitext">
                            <p>
                                사용자 입장에서 <br />
                                디자인을 생각하겠습니다
                            </p>
                            <p className="span">*오른쪽은 랜딩페이지 기획 결과물입니다.</p>
                            <p className="span">
                                <a href="https://roop-top-cat.vercel.app/ ">사이트 보기</a>
                                <a href="https://jykthink.notion.site/393675f541544a4f8d5d5aaa1dc62af7 ">디자인 소개</a>
                            </p>
                        </div>
                    </article>
                    <article className="UxUi2">
                        <div className="UxUitext">
                            <p>
                                기본기를 생각하는
                                <br />
                                디자인을 만들겠습니다
                            </p>
                            <p className="span">*왼쪽 사진은 설문조사앱을 리디자인하였습니다</p>
                            <p className="span">
                                <a href="https://jykthink.notion.site/a5e90095c3ab4601983b5a5853dfc12d">디자인 소개</a>
                            </p>
                        </div>
                        <div className="UxUiImg">
                            <img src={`${process.env.PUBLIC_URL}/images/doit.jpg`} alt="두잇서베이" />
                        </div>
                    </article>
                </UxUiSetion>
                <h1> 그래픽 작업물 </h1>
                <SlideSection {...settings}>
                    <div className="imgBox">
                        <img src={`${process.env.PUBLIC_URL}/images/banner1.png`} alt="배너1" />
                    </div>
                    <div className="imgBox2">
                        <img src={`${process.env.PUBLIC_URL}/images/banner2.png`} alt="배너2" />
                    </div>
                    <div className="imgBox">
                        <img src={`${process.env.PUBLIC_URL}/images/banner3.png`} alt="배너3" />
                    </div>
                    <div className="imgBox">
                        <img src={`${process.env.PUBLIC_URL}/images/banner4.png`} alt="배너4" />
                    </div>
                    <div className="imgBox">
                        <img src={`${process.env.PUBLIC_URL}/images/banner5.png`} alt="배너5" />
                    </div>
                    <div className="imgBox">
                        <img src={`${process.env.PUBLIC_URL}/images/banner6.png`} alt="배너6" />
                    </div>
                    <div className="imgBox">
                        <img src={`${process.env.PUBLIC_URL}/images/banner7.png`} alt="배너7" />
                    </div>
                    <div className="imgBox2">
                        <img src={`${process.env.PUBLIC_URL}/images/banner8.png`} alt="배너8" />
                    </div>
                    <div className="imgBox2">
                        <img src={`${process.env.PUBLIC_URL}/images/banner9.png`} alt="배너9" />
                    </div>
                    <div className="imgBox">
                        <img src={`${process.env.PUBLIC_URL}/images/banner10.png`} alt="배너10" />
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
        text-align: center;
        font-size: 18px;
        font-weight: 400;
        padding: 9%;
        .span {
            display: block;
            width: 100%;
            font-size: 16px;
            font-weight: bold;
            a {
                display: block;
                text-align: center;
                color: black;
                padding: 2% 2%;
            }
        }
    }
    .UxUi2 {
        display: flex;
        .UxUitext {
            text-align: center;
            font-size: 18px;
            font-weight: 400;
            padding: 9%;
            .span {
                display: block;
                width: 100%;
                font-size: 16px;
                font-weight: bold;
                a {
                    display: block;
                    text-align: center;
                    color: black;
                    padding: 2% 2%;
                }
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
    padding: 5% 5%;
    .imgBox {
        width: 1000px;
        height: 700px;
        padding: 5% 10% 5% 10%;
        box-sizing: border-box;
        img {
            width: 100%;
        }
    }
    .imgBox2 {
        width: 800px;
        height: 700px;
        padding: 0% 10% 0% 10%;
        box-sizing: border-box;
        img {
            width: 100%;
            height: 100%;
        }
    }
`;

export default UxUi;
