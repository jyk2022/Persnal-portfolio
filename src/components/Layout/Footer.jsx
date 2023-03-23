import styled from "styled-components";

function Footer() {
  if (window.location.pathname === "/") return null;
  return (
    <>
      <Footers>
        <h1> 저에 대해 더 알고 싶으시면 아래 배너를 클릭해주세요!</h1>
        <a href="https://jykthink.notion.site/JYK-667430a303b649059d37443f0faf88cb">
          <img
            src={`${process.env.PUBLIC_URL}/images/notion.jpg`}
            alt="노트폴리오 배너"
          />
        </a>
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
