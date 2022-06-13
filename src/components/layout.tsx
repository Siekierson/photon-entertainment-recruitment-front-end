import styled from "styled-components";
import Navbar from "./Navbar";
interface LayoutProps {
  children: React.ReactNode;
}
const Main = styled.div`
  background-color: #555;
  > * {
    color: #ddd;
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
