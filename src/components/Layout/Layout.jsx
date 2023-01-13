import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <ContentSection>{children}</ContentSection>
    </>
  );
}

const ContentSection = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;
export default Layout;
