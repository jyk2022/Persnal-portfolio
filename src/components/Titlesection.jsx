import styled from "styled-components";

function Titlesection() {
  return (
    <>
      <Titlesection>
        <h2>
          안녕하세요 김진영입니다.
          <br />
          여기서는 이 사이트의 제작 목적을 말씀드리고자 합니다.
        </h2>
      </Titlesection>
      ;
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
    left: 20%;
    transform: translate(-50% -50%);
    font-size: 40px;
  }
`;

export default Titlesection;
