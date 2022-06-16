import styled from "styled-components";
import Navbar from "./atoms/Navbar";
interface LayoutProps {
  children: React.ReactNode;
}
const Main = styled.div`
  background: linear-gradient(
    0deg,
    rgba(51, 51, 51, 1) 40%,
    rgba(85, 85, 85, 1) 100%
  );
  min-height: 100vh;
  * {
    color: #ddd;
    margin: 5px;
  }
`;
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
    </>
  );
}
