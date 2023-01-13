import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const HomeOn = () => {
    navigate("/");
  };
  const AboutOn = () => {
    navigate("/about");
  };
  const UxUiOn = () => {
    navigate("/uxui");
  };
  const webOn = () => {
    navigate("/web");
  };
  if (window.location.pathname === "/") return null;
  return (
    <>
      <NavHeader>
        <nav>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              onClick={HomeOn}
            />
          </div>
          <ul>
            <li onClick={AboutOn}>About</li>
            <li onClick={UxUiOn}>UX/UI</li>
            <li onClick={webOn}>웹개발</li>
          </ul>
        </nav>
      </NavHeader>
    </>
  );
}
const NavHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  flex-direction: row;
  border-bottom: 1px solid black;
  font-size: 18px;
  nav {
    width: 100%;
    max-width: 1440px;
    display: flex;
    div {
      width: 70%;
      box-sizing: border-box;
      padding-left: 5%;
      img {
        cursor: pointer;
      }
    }
    ul {
      display: flex;
      width: 30%;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      li {
        padding: 2% 2%;
        cursor: pointer;
        :hover {
          color: blue;
        }
      }
    }
  }
`;

export default Header;
