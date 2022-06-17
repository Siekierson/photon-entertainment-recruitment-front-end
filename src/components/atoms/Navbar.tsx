import { useContext, useState } from "react";
import { VideosContext } from "../../contexts/VideosContext";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/vercel.svg";
import { FaSearch } from "react-icons/fa";
import { Video } from "../../../types";
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
    font-size: 17px;
    padding: 8px 10px;
    color: white;
    background-color: transparent;
    border: 2px solid gray;
    > svg {
      font-size: 15px;
    }
  }
`;
interface ListProps {
  listState: boolean;
}
const List = styled.div`
  position: absolute;
  width: 70vw;
  z-index: 9;
  text-align: left;

  background-color: #474747e9;
  display: none;
  ${({ listState }: ListProps) =>
    listState === true &&
    `
   display:block
  `};

  > div {
    padding: 10px;
    border-bottom: 2px solid gray;
  }
`;
const Navbar = () => {
  const { videos } = useContext(VideosContext);
  const [matchVids, setMatchVids] = useState<Video[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [listState, setListState] = useState(false);
  function searchMatches() {
    videos.forEach((item: Video) => {
      if (
        item.attributes.title
          .toLowerCase()
          .search(inputVal.toLocaleLowerCase()) !== -1
      ) {
        matchVids.push(item);
      }
    });
  }
  return (
    <NavWrapper>
      <Link href="/">
        <Image src={logo} alt="logo" height={1} />
      </Link>
      <InputWrapper>
        <Input onChange={(e) => setInputVal(e.target.value)} />
        <button
          onClick={() => {
            setListState(!listState);
            searchMatches();
            if (listState) setMatchVids([]);
          }}
        >
          <FaSearch />
        </button>
        <List listState={listState}>
          {matchVids.map(({ attributes }: Video) => {
            const { youTubeVideoId, title } = attributes;
            return (
              <div key={`${Math.random()}`}>
                <Link href={`/video/${youTubeVideoId}`}>{title}</Link>
              </div>
            );
          })}
        </List>
      </InputWrapper>
    </NavWrapper>
  );
};
export default Navbar;
