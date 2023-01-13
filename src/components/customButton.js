import styled from "styled-components";

function MyButton({ children }) {
  return (
    <>
      <MyBtn>{children}</MyBtn>
    </>
  );
}

const MyBtn = styled.Button`
  width: 120px;
  height: 40px;
  background-color: #f1f9b0;
  border: none;
`;

export default MyButton;
