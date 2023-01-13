import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const AboutOn = () => {
    navigate("/about");
  };
  const UxUiOn = () => {
    navigate("/uxui");
  };
  const webOn = () => {
    navigate("/web");
  };
  return (
    <>
      <Mainsection>
        <div className="MainLeft">
          <h1>
            방문을 <br />
            환영합니다
          </h1>
          <p>저의 작은 노력을 담고자 했습니다.</p>
          <div className="BtnBox">
            <button className="MyBtn" onClick={AboutOn}>
              About
            </button>
            <button className="MyBtn" onClick={UxUiOn}>
              UX/UI
            </button>
            <button className="MyBtn" onClick={webOn}>
              웹개발
            </button>
          </div>
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/MainImg.gif`}
            alt="이미지"
          />
        </div>
      </Mainsection>
    </>
  );
}

const Mainsection = styled.section`
  display: flex;
  width: 100%;
  margin: 125px 0;
  .MainLeft {
    width: 370px;
    padding: 8% 2% 8% 2%;
    box-sizing: border-box;
    .BtnBox {
      display: flex;
      flex-direction: column;
      padding: 10% 20%;
      .MyBtn {
        width: 120px;
        height: 40px;
        background-color: #f1f9b0;
        border: none;
        margin-bottom: 4%;
        font-size: 24px;
        cursor: pointer;
        :hover {
          background-color: #c7d07a;
        }
      }
    }
    h1 {
      font-size: 60px;
      margin: 0 0;
    }
    p {
      padding-left: 3%;
    }
  }
`;

export default Main;
