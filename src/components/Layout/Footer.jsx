import styled from "styled-components";

function Footer() {
  if (window.location.pathname === "/") return null;
  return (
    <>
      <Footers>
        <img
          src={`${process.env.PUBLIC_URL}/images/notion.jpg`}
          alt="노트폴리오 배너"
        />
        <h1> 자세한 포트폴리오 내용은 노션 페이지를 확인해주세요</h1>
        <p>
          노션포트폴리오 주소 ->
          <a href="https://jykthink.notion.site/718813a9ba74444f8618148ad21079bc">
            노션포트폴리오
          </a>
        </p>
      </Footers>
    </>
  );
}

const Footers = styled.footer`
  display: block;
  width: 100%;
  text-align: center;
  padding: 2% 2% 2% 2%;
  margin-top: 5%;
  font-size: 18px;
  a {
    text-decoration: none;
    padding-left: 1%;
    :hover {
      text-decoration: dashed;
      color: blue;
    }
  }
`;

export default Footer;
