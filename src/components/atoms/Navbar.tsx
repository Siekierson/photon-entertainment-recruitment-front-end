import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/vercel.svg";
const NavWrapper = styled.div`
  height: 60px;
  width: 100vw;
  background-color: #414141;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
`;
const Input = styled.input`
  background-color: transparent;
  width: 40%;
  color: white;
`;
const InputWrapper = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
  > * {
    font-size: 18px;
    padding: 8px 10px;
    color: white;
    background-color: transparent;
    border: 2px solid gray;
  }
`;

const Navbar = () => (
  <NavWrapper>
    <Link href="/">
      <Image src={logo} alt="logo" height={1} />
    </Link>
    <InputWrapper>
      <Input />
      <button>Wyszukaj</button>
    </InputWrapper>
  </NavWrapper>
);
export default Navbar;
